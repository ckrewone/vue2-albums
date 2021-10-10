import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import VueRouter from 'vue-router'
import store from './store';
import router from './routes';
import { ValidationProvider, extend } from 'vee-validate';
import { alpha_spaces } from 'vee-validate/dist/rules';

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'Tylko litery i spacje'
});

Vue.component('ValidationProvider', ValidationProvider);

import 'boxicons/css/boxicons.min.css'
import 'vuesax/dist/vuesax.css'
import './styles/style.css'

Vue.use(Vuesax)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

