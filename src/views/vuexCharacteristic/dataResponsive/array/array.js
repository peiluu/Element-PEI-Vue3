/* eslint-disable no-unused-vars */

import { def } from './utils';
// 得到Array.prototype
const arraPrototype = Array.prototype;

// 以Array.prototype为原型创建arrayMethods对象, arrayMethods的原型指向arraPrototype
// 当外部文件查找引入arrayMethods的时候，会执行此文件中的代码
export const arrayMethods = Object.create(arraPrototype);

// 改写对象的原型的方法
// Object.setPrototypeOf(arr, arrayMethods); // es6推荐使用
// arr.__proto__ = arrayMethods;

// 改写Array.prototype上的7个方法。所有数组的方法都是Array.prototype上的方法
const methodsNeedChange = [
	'push',
	'pop',
	'shift',
	'unshift',
	'splice',
	'sort',
	'reverse',
];

methodsNeedChange.forEach(methodName => {
	// 备份原来的方法，因为七个函数的功能不能被剥夺
	const original = arrayMethods[methodName];
	// 定义新的方法
	def(
		arrayMethods,
		methodName,
		// 以函数的返回值作为def的第三个参数
		function () {
			/**
			 * 把这个数组身上的__ob__取出去，__ob__已经被添加了
			 * 为什么被添加了？因为数组肯定不是最高层，比如obj.g是数组，obj不能是数组，
			 * 第一次遍历obj这个对象的第一层的时候，已经给g（这个数组）添加了__ob__属性
			 */
			const ob = this.__ob__;

			// 有三种方法psuh/unshift/splice能够插入新项，现在要把插入的新项也要变成observe的
			let inserted = [];

			// 将类数组对象变成数组
			const args = [...arguments];
			switch (methodName) {
				case 'push':
				case 'unshift':
					inserted = args;
					break;

				case 'splice':
					/**
					 * splice格式是splice(下标, 数量, 插入的新项), 	如果第三个参数为空，则删除项
					 * plice(2) 传入一个参数，表示从最后一项算起，取倒数第三项开始的所有数据
					 * 如果传入的args为[0, 0, 1, 2, 3]，args.splice(2)的返回值为[1, 2, 3]
					 */

					inserted = args.splice(2);
			}
			// 判断有没有插入的新项，让新项也变成响应的
			if (inserted) {
				ob.observeArray(inserted);
			}

			/**
			 * 不能直接调用original()，函数直接通过()执行，上下文是windows对象
			 * 以数组去调用original，this指向当前数组，通过apply去调用，传入this，可以将当前数组的上下文当做备份函数的上下文执行
			 * 参数以数组的方式传递，arguments本身是一个数组
			 */

			// 恢复原来的功能
			const result = original.apply(this, arguments);
			console.log('result', result);
			return result;
		},
		false
	);
});
