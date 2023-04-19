/* eslint-disable no-unused-vars */
/**
 * 日常使用es6模块化语法 - export/import
 * ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。
 */
import { jsonToQueryString } from '@/utils/utils.ts';

/**
 * @description 封装公共请求 -- fetch + then
 * @param url 请求接口
 * @param options 请求参数及方法
 * @param config 其余配置项
 */

export const request1 = (url, options, config = { hideError: false }) => {
	const data = fetch(url)
		.then(response => {
			// 第一then获取一个response留
			if (response.status >= 200 && response.status < 300) {
				return response.json();
			}
		})

		// fetch 在第二个then方法中才能获取后台返回的数据
		.then(json => {
			console.log('json', json);
			return json;
		})
		// 捕获调用fetch方法的失败事件
		.catch(err => {
			console.log('err', err);
		});

	console.log('data', data);
	return data;
};

/**
 * @description 封装公共请求 - fetch + promise方法实现（直接用fetch + then方法比较简单）
 * @param url 请求接口
 * @param options 请求参数及方法
 * @param config 其余配置项
 */

export const request3 = async (url, options, config = { hideError: false }) => {
	/**
	 * fetch是基于promise，fetch是一种HTTP数据请求的方式，是XMLHttpRequest的一种替代方案。
	 * fetch不是ajax的进一步封装，而是原生js。Fetch函数就是原生js，没有使用XMLHttpRequest对象。
	 * async/await是基于promise之上的一个语法糖，可以让异步操作更加简洁明了
	 * async关键词将函数标记为异步函数 - 异步函数指返回值为promise对象的值
	 * 在异步函数中可以调用其他的异步函数
	 * await语法 - 等待promise完成之后直接返回最终的结果
	 * response 已经是服务器返回的最终数据
	 * await 指令后必须跟着一个 Promise
	 * await 看上去会暂停函数的执行，但是在等待的过程中，javascript同时可以处理其他的任务
	 */
	const response = await fetch(
		`${url}${url.indexOf('?') > 0 ? '&' : '?'}dev_ver=${window.SYSTEM_VERSION}`,
		{
			...options,
			credentials: 'include',
			headers: {
				Accept: 'application/json, text/javascript, */*; q=0.01',
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			},
		}
	);

	let data = {};
	console.log('response', response);
	// 请求成功
	if (response.status >= 200 && response.status < 300) {
		try {
			/**
			 * json()方法接收一个 Response 流，并将其读取完成，返回一个 JSON格式的对象。
			 * json() - 也是异步方法的，需要await一下，取代从then里面取数据
			 * 返回结果体内的数据
			 */
			data = await response.json();
		} catch (e) {
			console.log(e);
			data = {
				code: 1001,
				msg: 'Syntax Error in Response Data',
			};
		}
	} else {
		data = {
			code: 1000,
			msg: response.statusText,
		};
	}

	if (data.code === 999) {
		// // to authority
		// data = await authority("/api/authority");
		// if (data.code === 0) {
		//   window.3
		sessionStorage.setItem('oper', data.data.userName);
		//   return request(url, options);
		// }
	}

	if (data.code !== 0 && !config.hideError) {
		alert(data.msg);
	}
	return data;
};

/**
 * 日常使用es6模块化语法 - export/import
 * ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。
 */

/**
 * @description 封装公共请求 -- fetch + then
 * @param url 请求接口
 * @param options 请求参数及方法
 * @param config 其余配置项
 */

export const request4 = (url, options, config = { hideError: false }) => {
	const data = fetch(url)
		.then(response => {
			// return response;
			// 第一then获取一个response留
			if (response.status >= 200 && response.status < 300) {
				return response.json();
			}
		})

		// fetch 在第二个then方法中才能获取后台返回的数据
		.then(json => {
			console.log('json', json);
			return json;
		})
		// 捕获调用fetch方法的失败事件
		.catch(err => {
			console.log('err', err);
		});

	console.log('data', data);

	return data;
};

/**
 * @description 封装公共请求 - fetch + promise方法实现（直接用fetch + then方法比较简单）
 * @param url 请求接口
 * @param options 请求参数及方法
 * @param config 其余配置项
 */

export const request = (url, options, config = { hideError: false }) => {
	/**
	 * Promise 是一种更良好的编程风格，将嵌套格式(回调函数)的代码变成了顺序格式的代码（.then）
	 * Promise 构造函数只有一个参数，是一个函数，这个函数在构造之后会直接被异步运行
	 * 通过new Promise生成一个promise实例promise
	 */
	const promise = new Promise((resolve, reject) => {
		fetch(url, { ...options })
			.then(response => {
				reject();
			})
			// fetch - http响应失败
			// 捕获调用fetch方法的失败事件
			.catch(err => {
				console.log('err', err);

				reject(err);
			});
	});
	// console.log(promise);
	// 对promise的计算结算进行判断 --
	return (
		promise
			//  相当于fetch方法的第二个then - 得到resolve方法的返回值
			.then(data => {
				return data;
			})

			// 捕获promise的失败事件, 得到reject方法的返回值
			.catch(err => {
				console.log(err);
				// err.then((errData) => {
				//   console.log("errData", errData);
				// });
				return err;
			})
			.finally(() => {
				console.log('finally');
			})
	);
};

/**
 * @description POST请求
 */
export const post = (url, param, config) => {
	return request(
		url,
		{
			method: 'POST',
			body: jsonToQueryString({ ...param }),
		},
		config
	);
};

/**
 * @description GET请求，不需要请求体
 */
export const get = (url, config) => {
	return request(
		url,
		{
			method: 'GET',
			// body: jsonToQueryString({ ...param }),
		},
		config
	);
};
/**
 * @desption 获取一段随机文本
 * @returns 响应数据
 */
export const getSocial = async () => {
	try {
		console.log(
			await axios.get('https://api.uixsj.cn/hitokoto/get?type=social')
		);
		return await axios.get('https://api.uixsj.cn/hitokoto/get?type=social');
	} catch (error) {
		console.error(error);
	}
};

export const getSocial1 = async () => {
	try {
		return await service.get('https://api.uixsj.cn/hitokoto/get?type=social');
	} catch (error) {
		console.error(error);
  }

};
