import demo from './demo/src/demo.vue';
import card from './card/src/card.vue';

const components = [demo, card];

const install = Vue => {
	// 避免重复注册
	if (install.installed) return;

	components.forEach(item => {
		Vue.component(item.name, item);
	});
};


const API2 = {
	install,
};
export default API2;
