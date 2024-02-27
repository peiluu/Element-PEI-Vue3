<template>
	<div class="page-defineproperty">
		<h4>Vue Defineproperty</h4>
		<div>
			<h5>{{ form }}</h5>
			<el-button class="box" @click="addProty">添加响应式属性</el-button>
		</div>
		<div>
			<h5>{{ person }}</h5>
			<el-button class="box" @click="defineProperty">defineProperty添加属性</el-button>
			<el-button class="box" @click="responsiveDefineProperty">defineProperty添加响应式属性</el-button>
		</div>

		<div>
			<el-button class="box" @click="definRelation">设置数据关联</el-button>
		</div>
		<div>
			<h5>{{ _data }}</h5>
			<el-button class="box" @click="setProxy">设置数据代理</el-button>
			<!-- <el-button class="box" @click="setVueProxy">vue中设置数据代理</el-button> -->
		</div>

		<div>
			<h5>{{ _data }}</h5>
			<el-button class="box" @click="setHijack">设置数据劫持</el-button>
			<!-- <el-button class="box" @click="setVueProxy">vue中设置数据代理</el-button> -->
		</div>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
	name: 'defineproperty',
	components: {},
	data() {
		return {
			form: {},
			listData: {},
			person: {
				name: '张三',
				age: 18
			}
		};
	},
	beforeMount() { },
	mounted() { },
	computed: {
		computedPerson() {
			return {
				name: '张三',
				age: 18
			}
		}
	},
	methods: {

		addProty() {
			// 给对象添加响应式属性
			// $set(this.form, 'name', "张三")
		},

		defineProperty() {
			const person = {
				name: '张三',
				age: 18
			}

			person.sex = "男"
			console.log(111, person)
			// 相对于直接添加属性，defineProperty可以进行更加灵活的配置
			Object.defineProperty(person, 'job', {
				value: '开发', // 属性值
				enumerable: true, // 控制属性是否可以枚举，默认值是false
				writable: true,// 控制属性是否可以被修改，默认值是false
				configurable: true,// 控制烟性是否可以被删除，默认值是false
				// 数据劫持,
				// get() {
				// 	console.log('你在访问obj.ame');
				// 	return value;
				// },
				// set(newVal) {
				// 	value = newVal;
				// 	console.log('你在改变obj.ame');
				// },
			})
			console.log(111, person)
		},
		// 修改响应式数据
		responsiveDefineProperty() {
			this.person.sex = "男"
			console.log(111, this.person)
			// defineProperty添加的属性是非响应式的
			Object.defineProperty(this.person, 'job', {
				value: '开发'
			})
			console.log(111, this.person)
		},

		definRelation() {
			const person = {
				name: '张三',
			};
			let tempAag = 0;
			// 借助defineProperty将temp和obj进行关联
			Object.defineProperty(person, 'age', {
				get() {
					console.log('你在访问obj.age');
					return tempAag;
				},
				set(newVal) {
					tempAag = newVal;
					console.log('你在改变obj.age');
				},

			});
			person.age = 18;
			console.log(person)
		},
		setProxy() {
			console.log(this)
			const obj1 = { x: 100 }
			const obj2 = { y: 100 }
			// 数据代理:通过一个对象代理对另一个对象中属性的操作(读/写)
			// 通过obj2去访问obj1中的x，并可以修改obj1中的x
			Object.defineProperty(obj2, 'x', {
				get() {
					return obj1.x
				},

				set(value) {
					obj1.x = value
				},
			});
			obj1.x = 200
			obj2.x = 300
			console.log('obj1', obj1)
			console.log('obj2', obj2)
		},

		/**
		 * 1.Vue中的数据代理: 通过vm对象来代理data对象中属性的操作(读/写)
		 * 2.Vue中数据代理的好处: 更加方便的操作data中的数据
		 * 3.某本原理:
					通过object.defineProperty()把data对象中所有属性添加到vm上.
					为每一个添加到vm上的属性，都指定一个getter/setter。
					在getter/setter内部操作(谈/写) data中对应的属性。
		*/

		/**
		 * vm._data 中应用的是数据劫持 - vue监测到data中的数据的改变，引起视图的改变
		*/
		setVueProxy() {
			// vm.person.sex = '女'
		},

		// 数据劫持 - 劫持或者监听数据的变化
		setHijack() {
			const person = { name: '张三', age: 18 }
			Object.defineProperty(person, 'age', {
				// 通过set

				set(value) {
					render()
				},
			});
			const render = () => {
				console.log('数据的改变被劫持了')
			}
			person.age = 20
		}
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
