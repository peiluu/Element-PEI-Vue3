<template>
	<div class="com-message">
		这里是news组件
		<el-input v-model="news" />
	</div>
</template>

<script>
export default {
	name: 'news',
	components: {},
	data() {
		return {
			news: '',
		};
	},
	props: [],
	beforeMount() {},
	mounted() {},
	methods: {},
};
</script>
