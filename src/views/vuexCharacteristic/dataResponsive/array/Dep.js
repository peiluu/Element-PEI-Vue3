/* eslint-disable no-unused-vars */

import { def } from './utils.js';
import { defineReactive } from './defineReactive.js';
import { arrayMethods } from './array';
import { observe } from './observe.js';

/**
 * Dep类 - 将一个正常的object转换为每个层级的属性都是响应式的（可以被侦测的）的object
 */
export default class Dep {
	constructor(value) {
		console.log('我是Dep类的构造器，', value);
	}

	notify() {
		console.log('notify');
	}
}
