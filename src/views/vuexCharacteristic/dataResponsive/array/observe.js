/* eslint-disable no-unused-vars */

import Observer from './Observer.js';

// 创建observe函数，注意函数的名字没有r
export const observe = function (value) {
	// 如果value不是对象，什么都不做
	if (typeof value !== 'object') return;
	// ob表示Observer类的实例
	let ob;
	if (typeof value.__ob__ !== 'undefined') {
		ob = value.__ob__;
	} else {
		ob = new Observer(value);
		console.log(ob)
	}
	return ob;
};
