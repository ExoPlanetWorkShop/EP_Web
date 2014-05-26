module.exports = function (req, res, next){
	async.waterfall([
		function (cb){
			models.test.findAll(cb);
		}
	], function (err, docs){
		console.dir(docs);
		res.send('Hello, World');
	});
};