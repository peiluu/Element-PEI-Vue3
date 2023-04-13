<template>
	<div class="com-message">
		这里是message组件
		<el-input v-model="message" />
		<el-button @click="sendData">向父组件发送数据</el-button>
	</div>
</template>
<!-- eslint-disable no-unused-vars -->
<script>
import pubsub from 'pubsub-js';
export default {
	name: 'message',
	components: {},
	data() {
		return {
			message: '',
		};
	},
	props: [],
	beforeMount() {
		// this.$bus.$emit('hello', data => {
		// 	console.log('接收到hello事件, 输出data', data);
		// });
	},
	mounted() {
		// console.log(this.$bus.$on.length);
		// 使用全局事件总线
		this.$bus.$on('hello', (msgName, data) => {
			// console.log('接收到hello事件, 输出data', msgName, data);
		});

		// 类似于定时器，每次监听都创造一个新的id
		this.pubId = pubsub.subscribe('subEvent', data => {
			// console.log('有人发布了消息，订阅消息执行了', data);
		});
		// console.log('监听pubId的变化，输出值' + this.pubId);
	},
	beforeDestroy() {
		// 解绑全局事件总线，销毁傀儡
		this.$bus.$off('hello');
		// 销毁全部全局事件， 不要这样使用
		// this.$bus.$off();
		// 取消订阅
		pubsub.unsubscribe(this.pubId);
	},
	watch: {
		pubId(val) {
			console.log('监听pubId的变化，输出值' + val);
		},
	},
	methods: {
		sendData() {
			this.$emit('onCall', this.message);
		},
	},
};
</script>
