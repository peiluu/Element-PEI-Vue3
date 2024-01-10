/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import config from '@/config/index.ts';
import { ElMessage } from 'element-plus';
// const querystring = require('querystringify');
// import store from '../store';

// 创建axios对象，当同时配置proxy本地代理和baseURL时，会优先使用baseURL
const service = axios.create({
	//`baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
	// baseURL: config.BASE_API,
	// baseURL: 'http://localhost:8088',
	timeout: 60000,
	withCredentials: true,
});

// request拦截器
// request拦截器，interceptors应用了设计模式中的装饰器模式，前置了切片函数
service.interceptors.request.use(
	config => {
		config.headers['Content-Type'] = 'application/json; charset=utf-8';
		// if (config.method === 'get' || config.method === 'post') {
		// 	config.data = qs.stringify({
		// 		...config.data,
		// 	});
		// }
		// 加载接口时显示loading
		// if (!config.hideLoading) {
		// 	loading = MessageBox.service({
		// 		lock: true,
		// 		// text: "Loading",
		// 		background: 'rgba(0, 0, 0, 0.7)',
		// 	});
		// }

		// // 在请求发送之前做一些处理
		// if (!/^https:\/\/|http:\/\//.test(config.url)) {
		// 	const token = cookies.get('token');
		// 	if (token && token !== 'undefined') {
		// 		// 让每个请求携带token-- ['Authorization']为自定义key 请根据实际情况自行修改
		// 		config.headers['Authorization'] = 'Bearer ' + token;
		// 	}
		// }
		return config;
	},
	error => {
		console.log(error); // for debug
		Promise.reject(error);
	}
);

// respone拦截器
service.interceptors.response.use(
	response => {
		const res = response.data;
		// 调用接口成功，返回接口数据
		if (res.code === 0) return res;

		// code为非0是抛错 可结合自己业务进行修改
		ElMessage({
			message: res.message || '系统错误',
			type: 'error',
			duration: 5 * 1000,
		});

		// 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
		if (
			res.statusCode === 50008 ||
			res.statusCode === 50012 ||
			res.statusCode === 50014
		) {
			// ElMessageBox.confirm(
			//   "你已被登出，可以取消继续留在该页面，或者重新登录",
			//   "确定登出",
			//   {
			//     confirmButtonText: "重新登录",
			//     cancelButtonText: "取消",
			//     type: "warning",
			//   }
			// ).then(() => {
			//   store.dispatch("FedLogOut").then(() => {
			//     location.reload(); // 为了重新实例化vue-router对象 避免bug
			//   });
			// });
		}
		return 'error';
	},
	error => {
		console.log('err' + error); // for debug
		ElMessage({
			message: error.message,
			type: 'error',
			duration: 5 * 1000,
		});
		return error;
	}
);
/**
 * @desption axios.get方法
 * @param  url 接口地址
 * @param params 访问参数
 * @param cb 回调函数
 * @returns 响应数据
 */
const get = async ({ url = '', params }, cb = () => {}) => {
	try {
		return await service.get(`${url}?${querystring.stringify(params)}`);
	} catch (error) {
		console.error(error);
	}
};

/**
 * @desption axios.post方法
 * @param  url 接口地址
 * @param params 访问参数
 * @param cb 回调函数
 * @returns 响应数据
 */
const post = async ({ url = '', params = {} }, cb = () => {}) => {
	try {
		const res = await service.post(url, params, {
			headers: { 'Content-Type': 'application/json', 'Data-Type': 'json' },
		});
		if (res) {
			return res;
		}
	} catch (error) {
		// debugger
		console.error(error);
	}
};

/**
 * @desption axios.post方法
 * @param  url 接口地址
 * @param params 访问参数
 * @param cb 回调函数
 * @returns 响应数据
 */
const customePost = async (
	{ url = '', params = {}, method = 'get' },
	cb = () => {}
) => {
	try {
		const res = await service({
			url,
			method, // 默认是get
			data: params, // post请求，前端给后端传递的参数
			params, // get请求，前端给后端传递的参数
		});
		if (res) {
			return res;
		}
	} catch (error) {
		// debugger
		console.error(error);
	}
};

// export { get, post, customePost, getSocial, getSocial1 };
export default service;
