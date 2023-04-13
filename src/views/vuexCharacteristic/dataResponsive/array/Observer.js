/* eslint-disable no-unused-vars */

import { def } from './utils.js';
import { defineReactive } from './defineReactive.js';
import { arrayMethods } from './array';
import { observe } from './observe.js';

/**
 * Observer类 - 将一个正常的object转换为每个层级的属性都是响应式的（可以被侦测的）的object
 * 创建类的时候要考虑一个类如何被实例化
 */
export default class Observer {
	// 类的构造方法，每次通过new关键词去创建类的实例时，都会调用此函数
	constructor(value) {
		// console.log('我是Observer构造器，', value);
		// 给实例（this: 函数中的this不是表示类本身，而是表示实例）添加了__ob__属性，值是这是new的实例
		def(value, '__ob__', this, false);

		// 检查是数组还是对象
		console.log(value)
		if (Array.isArray(value)) {
			// ，如果是数组，强行将数组的原型指向arrayMethods（重写过数组七个方法的原型对象	）
			Object.setPrototypeOf(value, arrayMethods);
		} else {
			this.walk(value);
		}
	}

	// 遍历对象
	walk(value) {
		for (let key in value) {
			defineReactive(value, key);
		}
	}
	// 数组的特殊遍历
	observeArray(arr) {
		// 事先定义好len = arr.length，防止数组在遍历的过程中有长度的变化
		for (let i = 0, len = arr.length; i < len; i++) {
			observe(arr[i]);
		}
	}
}
