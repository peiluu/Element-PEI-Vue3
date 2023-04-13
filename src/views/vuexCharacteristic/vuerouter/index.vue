<template>
	<div class="page-vuerouter">
		<h4>Vue Router</h4>

		<el-button @click="changeCom">切换组件</el-button>

		<message v-if="showMeaage" />
		<keep-alive v-else>
			<news />
		</keep-alive>

		<el-input v-model="message" />
	</div>
</template>
<!-- eslint-disable no-unused-vars -->
<script>
// import new from './components/new.vue';
import message from './components/message.vue';
import news from './components/news.vue';

export default {
	name: 'vuerouter',
	components: {
		message,
		news,
	},
	data() {
		return {
			showMeaage: true,
			message: '',
		};
	},
	props: [],
	beforeMount() { },
	mounted() { },
	// 进入时守卫，通过路由规则，进入该组件时被调用，
	beforeRouteEnter(to, form, next) {
		// console.log(to);
		next();
	},
	// 离开时守卫，通过路由规则，离开该组件时被调用
	beforeRouteLeave(to, form, next) {
		next();
	},

	methods: {
		changeCom() {
			this.showMeaage = !this.showMeaage;
		},
	},
};
</script>

<style lang="scss" scoped>
.page-vuerouter {
	@include scrollBar();
}
</style>
