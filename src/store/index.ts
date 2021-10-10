import Vuex from "vuex"
import Vue from "vue"

import albums from "./albums"
import favorite from './favorite'
import photos from './photos'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        albums,
        favorite,
        photos,
    }
})

export default store;
