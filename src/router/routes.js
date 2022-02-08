const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue'),
	},
	{
		path: '*',
		name: 'notFound',
		redirect: '/',
	},
];

export default routes;