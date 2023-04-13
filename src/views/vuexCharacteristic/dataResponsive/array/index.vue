<template>
	<div class="page-defineproperty">
		<h4>Vue递归侦测 - 数组</h4>
		<h5>
			<button @click="watchArr">递归侦测对象和数组的全部属性</button>
		</h5>
	</div>
</template>
<!-- eslint-disable no-unused-vars -->
<script>
import { observe } from './observe';

export default {
	name: 'arrayResponsive',
	components: {},
	data() {
		return {
			person: {
				name: '张三',
				age: 18
			}
		};
	},

	mounted() { },

	methods: {
		watchArr() {
			let obj = {
				a: {
					c: []
				},
				b: [],
			}
			observe(obj)
			obj.a.c.push(1, 2, 3)
			obj.b.splice(0, 0, 1, 2, 3)
		},
	},
};
</script>

<style lang="scss">
.page-defineproperty {
	div {
		margin-bottom: 16px;
	}
}
</style>
