import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './modules/menu';
import hit from './modules/hit';
import list from './modules/list';
import category from './modules/category';

export const store = new Vuex.Store({
	modules: {
		menu,
		hit,
		list,
		category
	},
	strict: process.env.NODE_ENV !== 'production'
});
