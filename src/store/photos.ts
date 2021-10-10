import axios from 'axios'

const GET_PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos'

const photos = {
    namespaced: true,
    state: {
        photos : [],
    },
    mutations: {
        SET_PHOTOS (state: any, photos: any) {
            state.photos = photos;
        },
    },
    actions: {
        async fetchPhotosByAlbumId({ commit, state } : any, albumId: number) {
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
    getters: {
        getPhotos: (state: any) => {
            return state.photos;
        },
        getPhotosByAlbumId: (state: any) => (id: number) => {
            return state.photos.filter((photo: any) => photo.albumId == id);
        }
    }
}

export default photos