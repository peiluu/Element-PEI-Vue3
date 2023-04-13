/**
 * @description 单页面的定制化混合
 */
export default {
	data() {
		return {
			a: 1,
			b: 2,
		};
	},
	// 混入的生命周期钩子函数
	created() {
		console.log('单个页面混入created');
	},
};
