import MainView from './components/MainView.vue';
import Admin from './components/Admin.vue';
import Adminn from './components/Adminn.vue';

export const routes = [
	{path: '/', component: MainView},
	{path: '/admin', component: Admin},
	{path: '/adminn', component: Adminn}
];