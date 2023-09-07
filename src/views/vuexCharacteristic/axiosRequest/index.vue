<template>
	<div class="page-home">
		<h4>首页</h4>
		<h6>获取express服务器下的api，获取用户数据</h6>
		<div>用户名：{{ userInfo.name }}</div>
		<div>年龄：{{ userInfo.age }}</div>
		<!-- <button v-permission></button> -->
		<el-button type="primary">1</el-button>
		<!-- <card /> -->
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { getPerson, sendUser } from './api';
import singleMixins from '@/plugin/mixins/singleMixins';

export default {
	name: 'axiosRequest',
	components: {},
	data() {
		return {
			userInfo: {},
		};
	},
	mixins: [singleMixins],
	mounted() {
		this.getPerson();
		this.sendUser();
	},

	methods: {
		async getPerson() {
			const { data = {} } = await getPerson();
			console.log(data);
			this.userInfo = data;
		},
		async sendUser() {
			const { data = {} } = await sendUser({
				user: 1,
			});
			console.log(data);
			this.userInfo = data;
		},
	},
};
</script>

<style lang="scss">
.page-home {
	@include scrollBar();
}
</style>
