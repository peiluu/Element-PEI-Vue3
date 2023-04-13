/* eslint-disable no-unused-vars */

export default {
	install(Vue, options) {
		const store = options.store;
		/**
		 * @description 自定义指令
		 * @param {el} 当前的真实dom
		 * @param {binding} 绑定的按钮传递的数据
		 */
		Vue.directive('permission', {
			// 当被绑定的元素插入到 DOM 中时触发
			inserted: function (el, binding, vnode) {

				let access = false;
				// 没有按钮权限，移除按钮元素
				if (!access) {
					el.parentNode.removeChild(el);
				}
			},
		});

		// 自定义全部方法
		// Vue.prototype.hasPermissions = permissions => {
		// 	const isAdmin = store.state.d2admin.permission.isAdmin;
		// 	if (isAdmin) {
		// 		return true;
		// 	}
		// 	let has = false;
		// 	const checkCodes = store.state.d2admin.permission.functions.concat(
		// 		store.state.d2admin.permission.roles
		// 	);
		// 	for (const need of permissions) {
		// 		if (checkCodes.some(s => s === need)) {
		// 			has = true;
		// 			break;
		// 		}
		// 	}
		// 	return has;
		// };
		// Vue.prototype.hasFunctions = functions => {
		// 	const isAdmin = store.state.d2admin.permission.isAdmin;
		// 	if (isAdmin) {
		// 		return true;
		// 	}
		// 	let has = false;
		// 	const checkCodes = store.state.d2admin.permission.functions;
		// 	for (const need of functions) {
		// 		if (checkCodes.some(s => s === need)) {
		// 			has = true;
		// 			break;
		// 		}
		// 	}
		// 	return has;
		// };
		// Vue.prototype.hasRoles = roles => {
		// 	const isAdmin = store.state.d2admin.permission.isAdmin;
		// 	if (isAdmin) {
		// 		return true;
		// 	}
		// 	let has = false;
		// 	const checkCodes = store.state.d2admin.permission.roles;
		// 	for (const need of roles) {
		// 		if (checkCodes.some(s => s === need)) {
		// 			has = true;
		// 			break;
		// 		}
		// 	}
		// 	return has;
		// };
	},
};
