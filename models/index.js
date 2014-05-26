var mongoose = require('mongoose');

var connection= mongoose.connect(
	'mongodb://localhost/test',
	{
		server : {
			/*
			 * poolSize
			 * 會決定對 MongoDB 的連線數
			 */
			poolSize: 10,
			/*
			 * auto_reconnect
			 * 當連線掛掉時是否重新連線
			 */
			auto_reconnect : true,
			/*
			 * 參考 http://goo.gl/0Ac4YB
			 * For long running applictions it is often prudent to enable keepAlive.
			 * Without it, after some period of time
			 * you may start to see "connection closed" errors for what seems like no reason.
			 * If so, after reading this, you may decide to enable keepAlive:
			 */
			socketOptions : { keepAlive : 1 }
		}
	}
);

module.exports.test = require('./test');