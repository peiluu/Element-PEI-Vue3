<template>
	<div class="page-defineproperty">
		<h4>Vue递归侦测 - 对象</h4>
		<h5>
			<button @click="watchObj">递归侦测对象的全部属性</button>
		</h5>
	</div>
</template>
<!-- eslint-disable no-unused-vars -->
<script>
import { observe } from './observe';

export default {
	name: 'objectResponsive',
	components: {},
	data() {
		return {
			person: {
				name: '张三',
				age: 18
			}
		};
	},

	mounted() {
		function Creat() { }
		const obj = new Creat()
		// console.log(obj.__proto__)	
		// console.log(obj.__proto__ === Creat.prototype)
		// console.log(Creat.prototype.__proto__) // Object构造函数说
	},
	methods: {
		watchObj() {
			let obj = {
				a: {
					m: {
						n: ''
					},
					b: {
						x: '',
						y: ''
					}
				},
				b: {
					x: '',
					y: ''
				}
			}
			observe(obj)
			console.log(obj);
			console.log(obj.a.m.n);
		},
	}
};
</script>

<style lang="scss">
.page-defineproperty {
	div {
		margin-bottom: 16px;
	}
}
</style>
