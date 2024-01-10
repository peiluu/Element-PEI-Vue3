<template>
	<div class="c-card">这里是card组件</div>
</template>

<script>
export default {
	name: 'card',
	computed: {
		// cachedViews() {
		// 	// return this.$store.state.tagsView.cachedViews;
		// },
		key() {
			return this.$route.fullPath;
		},
	},
};
</script>

<style lang="scss">
@import '../../../css/card.scss';
.c-card {
// 	border: 1px solid red;
}
</style>
