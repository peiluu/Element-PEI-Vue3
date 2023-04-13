<template>
	<div class="page-systemsetting">
		<h4>ES6学习</h4>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */

import { post } from '@/utils/request.js';
export default {
	name: 'es6',
	components: {},
	data() {},
	mounted() {
		// 调用生成器函数，返回迭代器对象，需要调用对象上的next方法去执行
		// generator生成器其实就是一个特殊的函数，用于异步编程的一种新的解决方案
		function* generator() {
			// yield - 函数代码的分隔符，将函数代码分隔离成一块一块的，有next方法来执行
			console.log('获取用户数据');

			// const yieldResult = yield 'yield后语句'
			// console.log('yield的返回值', yieldResult)
			yield 'yield后语句';

			// const user = yield getUser()
			// console.log(user)

			// console.log('获取订单数据')
			// const order = yield getOrder()
			// console.log(order)

			// console.log('获取商品数据')
			// const goods = yield getGoods()
			// console.log(goods)
		}

		const iterator = generator();

		iterator.next();
		// 每一次调用next，将yeild前面的代码全部执行，返回第一个yield后面表达式的输出结果
		const nextResult = iterator.next('next的参数');
		console.log('next的返回值', nextResult);
		// iterator.next()
		// for (let v of iterator) {
		// 	console.log(v)
		// }

		function getUser() {
			setTimeout(() => {
				let data = '用户数据';
				// iterator.next()
				// next方法的参数是其对应的yield的语句的返回结果，第二个next传入的参数将作为第一个yield的语句的返回结果
				iterator.next(data);
				// return data
				// iterator.next(data)
			}, 1000);
		}
		function getOrder() {
			setTimeout(() => {
				let data = '订单数据';
				iterator.next(data);
			}, 1000);
		}
		function getGoods() {
			setTimeout(() => {
				let data = '商品数据';
				iterator.next(data);
			}, 1000);
		}
	},
	methods: {},
};
</script>

<style lang="scss">
$bG: 'red';

.page-systemsetting {
	.box {
		color: $bG;
		// @include box
	}
}
</style>
