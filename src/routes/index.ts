import AlbumList from '../views/AlbumList.vue';
import AlbumEdit from '../views/AlbumEdit.vue';
import AlbumAdd from '../views/AlbumAdd.vue';
import AlbumDetails from '../views/AlbumDetails.vue';
import VueRouter from "vue-router"
import Vue from "vue"

const routes = [
    { path: '/', component: AlbumList },
    { path: '/add', component: AlbumAdd },
    { path: '/edit/:id', component: AlbumEdit },
    { path: '/details/:id', component: AlbumDetails },
  ]

const router = new VueRouter({
    routes
})

export default router