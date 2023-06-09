<template>
	<div class="breadcrumb-container">
		<span>当前位置：</span>
		<el-breadcrumb separator=">">
			<transition-group name="breadcrumb">
				<template v-for="item in levelList">
					<el-breadcrumb-item :key="item.path" v-if="item.meta.title">
						{{ item.meta.title }}
					</el-breadcrumb-item>
				</template>
			</transition-group>
		</el-breadcrumb>
	</div>
</template>

<script>
export default {
	name: 'LgtBreadcrumb',
	created() {
		this.getBreadcrumb();
	},
	data() {
		return {
			levelList: null,
		};
	},
	watch: {
		$route() {
			this.getBreadcrumb();
		},
	},
	methods: {
    getBreadcrumb() {
			const matched = this.$route.matched.filter(item => item.meta.title);
			this.levelList = matched;

		},
	},
};
</script>

<style lang="scss" scoped>
.breadcrumb-container {
	display: flex;
	align-items: center;
	font-size: 16px;
//	color: #97a8be;
	.el-breadcrumb {
		font-size: 16px;
	}
}
</style>
