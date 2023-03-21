import demo from './src/demo.vue';
// import card from './card/src/index.vue';
// import demo1 from './demo1/src/index.vue';
// import header1 from './header1/src/index.vue';

// const comArr = [demo, card, demo1, header1];

// 统一install

demo.install = Vue => {
	Vue.component(demo.name, demo);
};

export default demo;
