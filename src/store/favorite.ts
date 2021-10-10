const favorite = {
    namespaced: true,
    state: {
        favorives : []
    },
    mutations: {
        ADD_FAVORITE (state: any, item: any) {
            state.favorives.push(item)
        },
        DELETE_FAVORITE (state: any, id: any) {
            state.favorives.splice(state.favorives.findIndex((el:any) => el == id), 1);
        }
    },
    actions: {
        addOrDeleteFavorite({ commit, state } : any, id: any) {
            if(state.favorives.findIndex((el: any) => el == id) !== -1) {
                console.log('Delete item: ' + id)
                commit('DELETE_FAVORITE', id)
            } else {
                console.log('Add item: ' + id)
                commit('ADD_FAVORITE', id)
            }
        }
    },
    getters: {
        getFavorites: (state: any) => {
            return state.favorives;
        },
        getCounter: (state: any) => {
            return state.favorives.length;
        },
        isFavorite:(state: any) => (id: any) => {
            return state.favorives.findIndex((el: any) => el == id) !== -1
        }
    }
}

export default favorite;