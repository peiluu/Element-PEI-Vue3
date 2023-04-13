/* eslint-disable no-unused-vars */

export default {
	install(Vue, options) {
		// 全局过滤器
		Vue.filter('myFilter', value => {
			return value.slice(0, 1);
		});

		// 自定义全局指令
		Vue.directive('fing', {
			// 当被绑定的元素插入到 DOM 中时触发
			inserted: function (el, binding, vnode) {},
		});

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
				// console.log('混入created')
			},
		});

		// 给Vue原型上添加方法，可以用Vue文件中用this调用
		Vue.prototype.hello = () => {

			console.log('调用Vue原型上的方法')
		};
	},
};
