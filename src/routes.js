import MainView from './components/MainView.vue';
import Admin from './components/Admin.vue';

export const routes = [
	{path: '/', component: MainView},
	{path: '/admin', component: Admin}
];