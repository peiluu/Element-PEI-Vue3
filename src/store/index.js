
import { createStore } from 'vuex';
import app from './modules/app';
import user from './modules/user';
import common from './modules/common';
import getters from './getters';
import fullScreen from './modules/fullScreen';
import permission from './modules/permission';
import tagsView from './modules/tagsView';
import errorLog from './modules/errorLog';

const store = createStore({
	modules: {
		app,
		user,
		common,
		fullScreen,
		permission,
		tagsView,
		errorLog,
	},
	getters,
});

export default store;
