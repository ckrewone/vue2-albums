import Vuex from "vuex"
import Vue from "vue"

import albums from "./albums/index"
import favorite from './favorite/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        albums,
        favorite,
    }
})

export default store;
