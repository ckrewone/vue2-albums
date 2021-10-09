import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import VueRouter from 'vue-router'
import store from './store';
import router from './routes';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

import 'boxicons/css/boxicons.min.css'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

