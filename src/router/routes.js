const routes = [
	{	path: '/',		name: 'Home', component: () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue'),},
	{	path: '*',		name: 'notFound', redirect: '/',},
	{ 	path: '/play',  name: 'Game', component: () => import(/* webpackChunkName: "Game" */ '../pages/Game.vue'),},
];

export default routes;