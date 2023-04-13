<template>
	<div class="com-message">
		这里是message组件
		<el-input v-model="message" />
	</div>
</template>

<script>
export default {
	name: 'message',
	components: {},
	data() {
		return {
			message: '',
		};
	},
	props: [],
	beforeMount() {},
	mounted() {},
	methods: {},
};
</script>
