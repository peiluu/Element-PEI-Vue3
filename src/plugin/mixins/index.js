/* eslint-disable no-unused-vars */

export default {
	install(Vue, options) {
		// 定义全局混入，不破坏代码，如果发生冲突，以组件内数据为主，生命周期钩子叠加，mixin内的先执行
		// 所有组件公用的方法和配置可以写在mixin里
		Vue.mixin({
			data() {
				return {
					a: 1,
					b: 2,
				};
			},
			// 混入的生命周期钩子函数
			created() {
				console.log('混入created')
			},
		});
	},
};
