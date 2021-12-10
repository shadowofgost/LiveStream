/*
 * @Author: your name
 * @Date: 2021-11-27 03:12:12
 * @LastTime         : 2021-12-04 21:10:25
 * @LastAuthor       : Albert Wang
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 * @FilePath         : /LiveStream/Templates/electron/src/router.js
 */
import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory();
const router = createRouter({
	history: routerHistory,
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "Home",
			component: () =>
				import(/* webpackChunkName: "Home" */ "./views/Home.vue"),
		},
		{
			path: "/Pull",
			name: "Pull",
			component: () => import("./views/Pull.vue"),
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/About.vue"),
		},
		{
			path: "/Whiteboard",
			name: "WhiteBoard",
			component: () =>
				import(
					/* webpackChunkName: "Board" */ "./views/WhiteBoard.vue"
				),
		},
		{
			path: "/Board",
			name: "Board",
			component: () =>
				import(/* webpackChunkName: "Board" */ "./views/Board.vue"),
		},
		{
			path: "/Video",
			name: "Video",
			component: () =>
				import(/* webpackChunkName: "Board" */ "./views/Video.vue"),
		},
		{
			path: "/Home",
			name: "Home",
			component: () => import("./views/Home.vue"),
			children: [
				{
					path: "/Whiteboard",
					name: "WhiteBoard",
					component: () => import("./views/WhiteBoard.vue"),
				},
				{
					path: "/Pull",
					name: "Pull",
					component: () => import("./views/Pull.vue"),
				},
				{
					path: "/Board",
					name: "Board",
					component: () => import("./views/Board.vue"),
				},
				{
					path: "/Video",
					name: "Video",
					component: () => import("./views/Video.vue"),
				},
			],
		},
	],
});
export default router;
