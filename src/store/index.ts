import Vuex from "vuex"
import Vue from "vue"

import albums from "./albums"
import favorite from './favorite'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        albums,
        favorite,
    }
})

export default store;
