/* eslint-disable no-unused-vars */

import { def } from './utils.js';
import { defineReactive } from './defineReactive.js'

/**
 * Observer类 - 将一个正常的object转换为每个层级的属性都是响应式的（可以被侦测的）的object
 */
export default class Observer {
	constructor(value) {
		console.log('我是Observer构造器，', value);
		// 给实例（this: 函数中的this不是表示类本身，而是表示实例）添加了__ob__属性，值是这是new的实例
		def(value, '__ob__', this, false);
		this.walk(value)
	}

	// 遍历
	walk(value) {
		for(let key in value) {
			defineReactive(value, key)
		}

	}
}
