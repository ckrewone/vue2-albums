import axios from 'axios'
import { v4 } from 'uuid'
import { Commit } from 'vuex'
import { Album } from './Album'
import { AlbumsState } from './AlbumsState'
import { Photo } from './Photo'

const GET_ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'
const GET_PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos'

const albums = {
    namespaced: true,
    state: {
        albums: [],
        photos: [],
    },
    mutations: {
        SET_PHOTOS(state: AlbumsState, photos: Photo[]) {
            state.photos = photos;
        },
        SET_ALBUMS(state: AlbumsState, albums: Album[]) {
            state.albums = albums;
        },
        EDIT_ALBUM(state: AlbumsState, payload: Album) {
            const item = state.albums.find((album: Album) => album.id == payload.id)
            Object.assign(item, payload)
        },
        ADD_ALBUM(state: AlbumsState, album: Album) {
            state.albums.unshift(album)
        },
    },
    actions: {
        async fetchPhotos({ commit }: {commit: Commit}) {
            try {
                const photos: { data: Photo[] } = await axios.get(GET_PHOTOS_URL);
                commit('SET_PHOTOS', photos?.data ?? []);
            } catch (e) {
                console.log('Fetching photos failed.', e);
            }
        },
        async fetchAlbums({ commit, state }: { commit: Commit, state: AlbumsState }) {
            if (!state.albums.length) {
                try {
                    const albums: { data: Album[] } = await axios.get(GET_ALBUMS_URL);
                    commit('SET_ALBUMS', albums?.data ?? []);
                } catch (e) {
                    console.log('Fetching albums failed.', e);
                }
            }
        },
        editAlbum({ commit }: { commit: Commit }, album: Album) {
            commit('EDIT_ALBUM', album)
        },
        addAlbum({ commit }: { commit: Commit }, album: Album) {
            album.id = v4()
            commit('ADD_ALBUM', album)
        },
    },
    getters: {
        getPhotos: (state: AlbumsState): Photo[] => {
            return state.photos;
        },
        getAlbumById: (state: AlbumsState) => (id: number): Album | undefined => {
            return state.albums.find((album: Album) => album.id == id);
        },
        getPhotosByAlbumId: (state: AlbumsState) => (id: number): Photo[] => {
            return state.photos.filter((photo: Photo) => photo.albumId == id) ?? [];
        },
        getAlbums: (state: AlbumsState): Album[] => {
            return state.albums;
        },
    }
}

export default albums;