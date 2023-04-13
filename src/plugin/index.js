import pluginPermission from '@/plugin/permission';
import global from '@/plugin/global';
// import mixins from '@/plugin/mixins';

/**
 * @desption 自定义全局插件 - Vue.js 的插件应该暴露一个 install 方法，调用之后所有的Vc和Vm都会用拥有插件里的方法和指令
 * 可以用插件统一封装directive、filter、mixins等各种方法
 * @param {Vue} Vue构造器
 * @param {options} 一个可选的选项对象，调用的时候可传参数
 */
export default {
	async install(Vue, options) {
		// console.log('调用插件');
		Vue.use(pluginPermission, options);
		// Vue.use(global, options);
		// Vue.use(mixins);
	},
};
