import axios from 'axios'
import { v4 } from 'uuid'

const GET_ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'
const GET_PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos'

const albums = {
    namespaced: true,
    state: {
        albums : [],
        photos : [],
    },
    mutations: {
        SET_PHOTOS (state: any, photos: any) {
            state.photos = photos;
        },
        SET_ALBUMS (state: any, albums: any) {
            state.albums = albums;
        },
        EDIT_ALBUM (state: any, payload: any) {
            const item = state.albums.find((album: any) => album.id == payload.id)
            Object.assign(item, payload)
        },
        ADD_ALBUM (state: any, album: any) {
            state.albums.unshift(album)
        },
    },
    actions: {
        async fetchPhotos({ commit, state, getters } : any, albumId: number) {
            try {
                const photos = await axios.get(GET_PHOTOS_URL);
                commit('SET_PHOTOS', photos?.data ?? []);
                } catch (e) {
                    console.log('Fetching photos failed.', e);
                }
            },
        async fetchPhotosByAlbumId({ commit, state } : any, albumId: number) {
            if(!state.photos.lenght) {
            try {
                const photos = await axios.get(GET_PHOTOS_URL, {
                    params: {
                        albumId,
                    }
                });
                commit('SET_PHOTOS', photos?.data ?? []);
                } catch (e) {
                    console.log('Fetching photos failed.', e);
                }
            }
        },
        async fetchAlbums({ commit, state } : any) {
            if(!state.albums.length){
            try {
            const albums = await axios.get(GET_ALBUMS_URL);
            commit('SET_ALBUMS', albums?.data ?? []);
            } catch (e) {
                console.log('Fetching albums failed.', e);
            }
        }
        },
        editAlbum({commit}: any, album: any) {
            commit('EDIT_ALBUM', album)
        },
        addAlbum({commit}: any, album: any) {
            album.id = v4()
            commit('ADD_ALBUM', album)
        },
    },
    getters: {
        getPhotos: (state: any) => {
            return state.photos;
        },
        getAlbumById: (state: any) => (id: number) => {
            return state.albums.find((album: any) => album.id == id);
        },
        getPhotosByAlbumId: (state: any) => (id: number) => {
            return state.photos.filter((photo: any) => photo.albumId == id);
        },
        getAlbums: (state: any) => {
            return state.albums;
        },
    }
}

export default albums;