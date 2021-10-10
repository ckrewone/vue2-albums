import { Commit } from "vuex";
import { FavoritesState } from "./FavoritesState";

const favorite = {
    namespaced: true,
    state: {
        favorives : []
    },
    mutations: {
        ADD_FAVORITE (state: FavoritesState, id: string) {
            state.favorives.push(id)
        },
        DELETE_FAVORITE (state: FavoritesState, id: string) {
            state.favorives.splice(state.favorives.findIndex((el: string) => el == id), 1);
        }
    },
    actions: {
        addOrDeleteFavorite({ commit, state } : { commit: Commit, state: FavoritesState }, id: string) {
            if(state.favorives.findIndex((el: string) => el == id) !== -1) {
                commit('DELETE_FAVORITE', id)
            } else {
                commit('ADD_FAVORITE', id)
            }
        }
    },
    getters: {
        getFavorites: (state: FavoritesState) => {
            return state.favorives;
        },
        getCounter: (state: FavoritesState) => {
            return state.favorives.length;
        },
        isFavorite:(state: FavoritesState) => (id: string) => {
            return state.favorives.findIndex((el: string) => el == id) !== -1
        }
    }
}

export default favorite;