import axios from 'axios';

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
    },
    actions: {
        async fetchAlbums({ commit } : any) {
            try {
            const albums = await axios.get(GET_ALBUMS_URL);
            commit('SET_ALBUMS', albums?.data ?? []);
            } catch (e) {
                console.log('Fetching albums failed.', e);
            }
        }
    },
    getters: {
        getAlbums: (state: any) => {
            return state.albums;
        }
    }
}

export default albums;