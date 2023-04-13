<template>
	<div class="page-systemsetting">
		<h4>ES6 生成器函数generator</h4>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */

import { post } from '@/utils/request.js';
export default {
	name: 'es6',
	components: {},
	data() {
		return {
			a: 1,
		};
	},
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

	created() {
			/**
	 * Map类型是键值对的有序列表，键和值是任意类型
	 * Map、WeakMap的区别 （weak - 弱）`
	 * 1. WeakMap只接受对象作为键名（null除外,因为typeof null为object），不接受其他类型的值作为键名
	 * 2. 没有遍历操作的API（entries、keys等）
	 */
	const map = new Map();
	map.set({}, 11111);
	map.set(undefined, 11111);
	// console.log('map', map);

	const weakMap = new WeakMap();
	weakMap.set({}, 11111);
	// weakMap.set(null, 11111);
	// console.log('weakMap', weakMap);

	/**
	 * 二、 Symbol类型
	 * Symbol类型创建独一无二的数据，两个值永远不相等（永远不会重复的字符串）
	 * Symbol.description - 定义Symbol的描述语言
	 */
	const Symbol1 = Symbol(1);
	const Symbol2 = Symbol(1);
	// console.log(Symbol1);
	// console.log(Symbol1 === Symbol2);
	// console.log(Symbol1.description);

	// 用Symbol3.for声明在全局变量里
	const Symbol3 = Symbol.for('JS');
	const Symbol4 = Symbol.for('JS');
	// console.log(Symbol3);
	// console.log(Symbol3 === Symbol4);
	// console.log(Symbol3.description);

	// Symbol应用 - 做唯一的key,避免相同的key值产生数据的覆盖
	const user1 = {
		name: '李四',
		key: Symbol(),
	};
	const user2 = {
		name: '李四',
		key: Symbol(),
	};
	const grade = {
		[user1.key]: {
			js: 80,
		},
		[user2.key]: {
			js: 70,
		},
	};
	// console.log(grade[user1.key]);
	/**
	 *三、深浅拷贝方法
	 * Object.create()方法用于创建一个新对象，并把新对象的原型对象指向该方法的第一个参数。
	 */
	const father = {
		age: 18,
	};

	const son = Object.create(father);
	// console.log(son.age);
	// console.log(son.__proto__);

	/**
	 * 四、js事件循环机制
	 */
	setTimeout(() => {
		// 异步任务 - 宏任务 - 计时器线程将setTimeout回调送入宏队列等待微任务队列全部执行完毕，再执行
		// console.log('计时器执行');
	}, 0);
	// 同步任务 - 按照顺序由js主线程直接执行
	for (let i = 0; i < 100; i++) {
		// console.log('i', i);
	}

	// 同步任务
	for (let j = 0; j < 100; j++) {
		// console.log('j', j);
	}
	// 异步任务 - 微任务（vip）- 优先执行
	Promise.resolve().then(() => {
		// console.log('Promise执行');
	});

	/**
	 * 五、js异步与同步问题 - 常见异步程序：计时器、ajax请求、文件流方法
	 * 1. 异步回调地狱
	 */

	// 定义获取喝奶茶的方法
	/* const getTea = fn => {
		setTimeout(() => {
			fn('喝奶茶');
		}, 2000);
	};

	定义获取吃火锅的方法
	const getHotPot = fn => {
		setTimeout(() => {
			fn('吃火锅');
		}, 1000);
	};
	// 调用获取奶茶的方法
	// getTea(data => {
	// 	console.log(data);
	// });
	// 调用获取火锅的方法
	// getHotPot(data => {
	// 	console.log(data);
	// });
	// 同级调用会改变执行顺序，执行顺序根据时间（先获取到火锅再获取到火锅）
	// 如果想固定顺序执行，就需要将后一步操作在前一步操作的回调函数中执行，就会形成回调地狱
	getTea(data => {
		console.log(data);
		getHotPot(data => {
			console.log(data);
			getTea(data => {
				console.log(data);
				getHotPot(data => {
					console.log(data);
				});
			});
		});
	});
*/

	/**
	 * 2. promise - es6之前都是用回调来解决异步问题，es6之后用promise实现链式调用
	 * promise - 它的英语意思就是"承诺"，表示一旦状态改变，就不会再变，任何时候都可以得到这个结果
	 * Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
	 * Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected
	 */
	const getTea = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (!1) {
					// 异步操作成功
					resolve('喝奶茶'); // resolve函数的作用 - 将Promise对象的状态从pending变为fulfilled
				} else {
					// try {
					// 	throw new Error('没有奶茶了');
					// } catch (e) {
					// 	console.log('try catch报错', e);
					// }
					reject('没有奶茶了'); // reject函数的作用 - 将Promise对象的状态从pending变为rejected
					// throw new Error('test'); // 直接在这里抛出error, 无法捕获，会导致页面报错
				}
			}, 1000);
		});
	};

	const getHotPot = () => {
		return new Promise((resolve, reject) => {
			// 一个promise只能resolve或者reject一次
			setTimeout(() => {
				resolve('吃火锅');
			}, 2000);
		});
	};

	/**
	 * getTea()方法调用完之后返回一个promise对象，拥有then方法，就可以实现循环
	 * then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为fulfilled调用，第二个回调函数是Promise对象的状态变为rejected时调用
	 */
	// console.log('promise对象', getTea());
	const p = getTea()
		// promise对象的then方法里可以获取resolve里面的数据
		.then(
			// 第一个回调函数
			// 在链式调用过程中，第一个promise状态是fulfilled，不会执行then, 没有新的promise对象返回，下一步就无法获取到正确的值
			data => {
				console.log(data);
				return getHotPot();
			},
			// promise对象的then方法的第二个函数和catch方法里可以捕获异步操作错误抛出错误，如果第二个函数没写，就直接在catch中捕获error，
			// 第二个回调函数是Promise对象的状态变为rejected时调用，如果运行中抛出错误，也会被catch()方法捕获。
			error => {
				console.log('error', error);
				throw new Error('抛出throw new Error');
			}
		)
		.catch(err => {
			console.log('catch err', err);
		});

	// p.then(data => {
	// 	console.log(data);
	// });
	// console.log('p', p);

	// p.then(data => {
	// 	console.log(data);
	// })
	// 	.catch(err => {
	// 		console.log('err', err);
	// 	})
	// 	.finally(final => {
	// 		console.log('final', final);
	// 	});

	// getTea()
	// 	.then(data => {
	// 		console.log(data); // 喝奶茶
	// 		return getHotPot();
	// 	})
	// 	// 第二个then是第一个方法执行之后返回的promise对象的方法
	// 	.then(data => {
	// 		console.log(data); // 吃火锅
	// 		return getTea();
	// 	})
	// 	.then(data => {
	// 		console.log(data); // 喝奶茶
	// 		return getHotPot();
	// 	});

	/**
	 * 3. async/await - es6中promise的语法糖，使异步的程序写起来更像是同步的程序
	 * await - 直接获取resolve里面的异步数据，并转为到普通数据
	 * aawait会等待此任务执行完毕才会接着往下执行
	 */
	// const getData = async () => {
	// 	const tea = await getTea();
	// 	console.log(tea);
	// 	const hotPot = await getHotPot();
	// 	console.log(hotPot);
	// };
	// getData();
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
