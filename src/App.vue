<template>
	<div id="app">
			<el-config-provider :locale="zhCn">
			<router-view v-slot="{ Component }" class="app-router-view">
				<transition>
					<component :is="Component" />
				</transition>
			</router-view>
		</el-config-provider>
	</div>
</template>
<!-- eslint-disable vue/no-unused-components -->
<script>
// 加载elment-plus中文字体
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
export default {
	name: 'App',
	components: {
		ElConfigProvider,
	},
	data() {
		return {
			zhCn,
		};
	},
};
</script>

<style>
.app .app-router-view {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	overflow: hidden;
	backface-visibility: hidden;
	transform: translate3d(0, 0, 0);
	transform-style: preserve-3d;
	visibility: visible;
}
</style>
