import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import E404 from './components/E404';
import Category from './components/Category';
import Home from './components/Home';

import {store} from './store';

const routes = [
	{
		name: 'home',
		path: '/news/halloween-skidki-do-30//',
		component: Home
	},
	{
		path: '/news/halloween-skidki-do-30/:route',
		component: Category,
	},
	{
		path: '*',
		component: E404,
		redirect: '/news/halloween-skidki-do-30//'
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});