import { createRouter, createWebHistory } from 'vue-router';


import Home from '../views/home';
import Test from '../views/test';
import PageNotFound from '../views/page_not_found';


const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/test', name: 'Test', component: Test },
	{ path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFound },
];


const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
