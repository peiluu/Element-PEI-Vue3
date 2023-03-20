<template>
	<section class="app-main">
		<div class="main-page">
			<lgt-breadcrumb />
			<transition name="fade" mode="out-in">
				<!-- <tags-view></tags-view> -->
				<keep-alive :include="cachedViews">
					<router-view :key="key"></router-view>
				</keep-alive>
			</transition>
		</div>
	</section>
</template>

<script>
import LgtBreadcrumb from '@/components/lgt-breadcrumb';

export default {
	name: 'AppMain',
	components: {
		LgtBreadcrumb,
	},
	computed: {
		cachedViews() {
			return this.$store.state.tagsView.cachedViews;
		},
		key() {
			return this.$route.fullPath;
		},
	},
};
</script>
<style lang="scss" scoped>
.app-main {
  width: 100%;
	min-height: calc(100vh - 50px);
	padding: 16px;
	background: #f0f2f5;
	.main-page {
		background: #fff;
		padding: 0 16px 16px;
		box-shadow: 0 2px 12px 0 #f0f2f5;
		min-height: calc(100vh - 50px);
	}
}
</style>
