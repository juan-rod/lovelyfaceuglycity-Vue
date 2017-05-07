import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import VueFire from 'vuefire';
import Vuex from 'vuex';
import store from './store/store';

Vue.use(Vuex)

import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueFire);

const router = new VueRouter({
	routes,
	mode:'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
