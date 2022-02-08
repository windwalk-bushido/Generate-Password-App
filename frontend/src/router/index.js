import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home";
import PageNotFound from "../views/page_not_found";

const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/:pathMatch(.*)*", name: "PageNotFound", component: PageNotFound },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
