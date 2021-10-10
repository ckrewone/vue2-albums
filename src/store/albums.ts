import axios from 'axios'
import { v4 } from 'uuid'

const GET_ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'

const albums = {
    namespaced: true,
    state: {
        albums : [],
        photos : [],
    },
    mutations: {
        SET_ALBUMS (state: any, albums: any) {
            state.albums = albums;
        },
        EDIT_ALBUM (state: any, payload: any) {
            state.albums[state.albums.findIndex((album: any) => album.id == payload.id)] = payload
        },
        ADD_ALBUM (state: any, album: any) {
            state.albums.unshift(album)
        },
    },
    actions: {
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
            album.id = album.id ?? v4()
            commit('ADD_ALBUM', album)
        },
    },
    getters: {
        getAlbums: (state: any) => {
            return state.albums;
        },
        getAlbumById: (state: any) => (id: number) => {
            return state.albums.find((album: any) => album.id == id);
        }
    }
}

export default albums;