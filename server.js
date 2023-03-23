const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Content-Type,Content-Length,Authorization,Accept,X-Requested-With'
	);
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
	res.header('X-Powered-By', '3.2.1');
	if (req.method === 'OPTIONS') {
		res.send(200);
	} else {
		next();
	}
});

/**
 * @desption /person 后端路由配置
 *
 */
app.get('/person', (req, res) => {
	res.send({
		code: 0,
		data: {
			name: 'tom',
			age: 18,
			sex: 'woman',
		},
	});
});

app.post('/sendUser', (req, res) => {
	if (req) {
		res.send({
			code: 0,
			data: {
				name: 'tom',
				age: 18,
			},
		});
	}
});
app.listen(9532, err => {
	if (!err) {
		console.log('服务器启动了');
		// console.log(globalThis);
		// console.log(global);
	}
});
