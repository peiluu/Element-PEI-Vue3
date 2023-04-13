/* eslint-disable no-unused-vars */
import { observe } from './observe';

export const defineReactive = function (data, key, tempVal) {
	// 闭包外层
	console.log('我是defineReactive', data, key);
	// 当不传入tempVal值时
	if (arguments.length == 2) {
		tempVal = data[key];
	}
  // 子元素要进行observe，至此形成递归。这个递归不是函数自己调用自己，而是多个函数类循环调用
	let childObj = observe(tempVal);

  
	Object.defineProperty(data, key, {
		enumerable: true, // 默认值都是false
		configurable: true,
		// 数据劫持,
		get() {
			// 闭包内层
			console.log('你在访问obj的属性', key);
			return tempVal;
		},
		set(newVal) {
			// 闭包内层
			console.log('你在改变obj的属性', key);
			if (tempVal === newVal) return;
			tempVal = newVal;
      // 当设置了新值，这个新值也要被observe
      childObj = observe(newVal)
		},
	});
};
