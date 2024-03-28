<template>
	<div class="page-vuecomponent">
		<h4>Vue Components</h4>
		<!-- 通过props传递事件，子给父传递数据 -->
		<message :onCall="onCallBack" />
		<!-- 通过自定义事件，子给父传递数据 -->
		<message v-on:onCall="onCallBack" />
		<el-button @click="publishMsg">发布消息</el-button>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */
import message from './components/message.vue';
/**
 * @despition pubsub是一个发布订阅消息的库，在任意框架中都可以用
 */
import pubsub from 'pubsub-js';

export default {
	name: 'vuecomponent',
	components: {
		message,
	},
	data() {
		return {};
	},
	beforeMount() {},
	mounted() {
		// 通过全局事件总线进行组件通信
		this.$bus.$emit('hello', '传递hello');
		// 通过发布订阅模式通信
	},
	methods: {
		onCallBack(data) {
			// console.log('接收子组件数据', data);
		},
		publishMsg() {
			pubsub.publish('subEvent', 666);
		},
	},
};
</script>

<style lang="scss">
.page-defineproperty {
	@include scrollBar();
}
</style>
