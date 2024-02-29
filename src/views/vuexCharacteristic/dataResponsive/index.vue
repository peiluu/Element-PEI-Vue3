
<template>
	<div class="page-defineproperty">
		<h4>Vue 数据响应式原理</h4>
		<h5>
			{{ person }}
			<button @click="addData">添加响应式数据</button>
		</h5>
		<el-tabs v-model="currentTab" class="center-tabs" type="card">
			<el-tab-pane label="侦听对象" name="object" />
			<el-tab-pane label="侦听数组" name="array" />
			<el-tab-pane label="ES6 class类" name="class" />
			<div v-if="(currentTab === 'object')">
				<objectResponsive />
			</div>
			<div v-if="(currentTab === 'array')">
				<arrayResponsive />
			</div>
			<div v-if="(currentTab === 'class')">
				<classStudy />
			</div>
		</el-tabs>

	</div>
</template>
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/no-unused-components -->
<script>
import objectResponsive from './object/Index.vue'
import arrayResponsive from './array/Index.vue'
import classStudy from './classStudy.vue'

export default {
	name: 'dataResponsive',
	components: {
		objectResponsive,
		arrayResponsive,
		classStudy
	},
	data() {
		return {
			currentTab: 'array',
			person: {
				name: '张三',
				age: 18
			}
		};
	},

	methods: {
		addData() {
			// 添加响应式数据
			this.defineReactive(this.person, 'width', 100);
			this.person.sex = '女'
			console.log(this.person.width);
		},

		/**
		 * 要多次改变属性值，需要一个临时变量来进行周转，但是此临时变量放在函数外，不太美观
		 * let tempVal = '';
			Object.defineProperty(data, key, {
				get() {
					return tempVal;
				},
				set(newVal) {
					tempVal = newVal;
				},
			})
		 */
		/**
		 * 把临时变量封装到一个函数之中, 形成了闭包环境，利用函数的闭包特性（函数定义时所处的作用域环境）
		 * tempVal是get和set闭包中的环境变量
		 */
		defineReactive(data, key, tempVal) {  // 闭包外层
			console.log(arguments)
			if (arguments.length == 2) {
				tempVal = data[key];
			}
			Object.defineProperty(data, key, {
				enumerable: true, // 默认值都是false
				configurable: true,
				// 数据劫持,
				get() {    // 闭包内层
					console.log('你在访问obj的width属性');
					return tempVal;
				},
				set(newVal) {    // 闭包内层
					console.log('你在改变obj的width属性');
					if (tempVal === newVal) return

					tempVal = newVal;
				},
			});
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
