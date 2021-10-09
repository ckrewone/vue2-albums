import AlbumList from '../views/AlbumList.vue';
import AlbumEdit from '../views/AlbumEdit.vue';
import AlbumAdd from '../views/AlbumAdd.vue';
import AlbumDetails from '../views/AlbumDetails.vue';
import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: AlbumList },
    { path: '/add', component: AlbumAdd },
    { path: '/edit/:id', component: AlbumEdit, props: true },
    { path: '/details/:id', component: AlbumDetails, props: true },
  ]

const router = new VueRouter({
    routes
})

export default router