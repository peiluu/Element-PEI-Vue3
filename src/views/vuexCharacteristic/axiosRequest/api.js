import request from '@/utils/axios';

export function getPerson(data) {
	return request({
		url: '/person',
		method: 'get',
		data,
	});
}

export function sendUser(data) {
	return request({
		url: '/sendUser',
		method: 'post',
		data,
	});
}
