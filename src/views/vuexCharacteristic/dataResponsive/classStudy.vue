<template>
	<div class="page-defineproperty">
		<h4>ES6 Class类学习</h4>
		<h5><button @click="addClass">构造类的实例</button></h5>

	</div>
</template>
<!-- eslint-disable no-unused-vars -->
<script>

export default {
	name: 'classStudy',
	data() {
		return {}
	},
	mounted() {
		// this.addClass()

		// 实现不重复添加数据时

		const record = { id: 11, potion: { a: 1, b: { c: '' } } }
		const arr = [{ id: 11 }]
		if (!arr.some((item) => item.id === record.id)) {
			arr.push(record)
		}
		console.log(arr)
		const { potion = {}, potion: { a = '' } = {}, potion: { a: { c = '' } } } = record
	},

	methods: {
		addClass() {
			class Phone {
				// 构造方法 名字不能修改，每次通过new去创建类的实例的时候都会调用
				constructor(brand, price) {
					console.log('调用构造方法')
					// 类的属性和方法，除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
					this.brand = brand
					this.price = price
				}
				name = 1;
				// 静态成员和静态方法，不会被子类和实例化对象继承
				static staticName = 1
				static sell() { }

				// 类的方法
				call(person) {
					console.log('打电话给' + person)
				}
				// 在class内部设置get 和 set
				get price() {
					console.log('属性被读取了')
					return this.price
				}
				set price(val) {
					console.log('属性被修改了', val)
				}
			}

			class SmartPhone extends Phone {
				// 子类的构造方法
				constructor(brand, price, color, size) {
					// 利用super调用父类的constructor方法，完成初始化，继承付父类的成员属性和方法
					super(brand, price) // 相当于	Phone.call(this, brand, price)
					console.log('调用构造方法')
					// 类的成员
					this.color = color
					this.size = size
				}

				photo() { }
				// 子类中重写父类的方法。不能直接去调用父类的成员方法
				call() {
					console.log('直接视频通话')
				}
			}

			const tel = new Phone('iphone', 10000)
			// 在类的实例上面调用方法，其实就是调用原型上的方法。
			tel.call('11')
			const sonTel = new SmartPhone('iphone', 10000, '黑色', 3.5)

			console.log(sonTel)
			sonTel.call()
		}
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
