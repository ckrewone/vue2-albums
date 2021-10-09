const favorite = {
    namespaced: true,
    state: {
        favorives : [],
        counter : 0,
    },
    mutations: {
        ADD_FAVORITE (state: any, item: any) {
            state.favorives.push(item)
        },
        DELETE_FAVORITE (state: any, item: any) {
            state.favorives.splice(state.favorives.findIndex((el:any) => el.id === item.id), 1);
        },
        INCREMENT (state: any) {
            state.counter++;
        },
        DECREMENT (state: any) {
            state.counter--;
        },
    },
    actions: {
        addToFavorite({ commit, state } : any, item: any) {
            if(state.favorives.findIndex((el: any) => el.id === item.id) === -1) {
                commit('ADD_FAVORITE', item)
                commit('INCREMENT')
            }
        },
        deleteFromFavorite({ commit, state } : any, item: any) {
            if(state.favorives.findIndex((el: any) => el.id === item.id) !== -1) {
                commit('DELETE_FAVORITE', item)
                commit('DECREMENT')
            }
        },
        addOrDeleteFavorite({ commit, state } : any, item: any) {
            if(state.favorives.findIndex((el: any) => el.id === item.id) !== -1) {
                console.log('Delete item: ' + item.id)
                commit('DELETE_FAVORITE', item)
                commit('DECREMENT')
            } else {
                console.log('Add item: ' + item.id)
                commit('ADD_FAVORITE', item)
                commit('INCREMENT')
            }
        }
    },
    getters: {
        getFavorites: (state: any) => {
            return state.favorives;
        },
        getCounter: (state: any) => {
            return state.counter;
        }
    }
}

export default favorite;