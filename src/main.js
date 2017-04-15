import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';

import { routes } from './routes';

Vue.use(VueMaterial);
Vue.use(VueRouter);

const router = new VueRouter({
	router,
	mode:'history'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
