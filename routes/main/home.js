module.exports = function (req, res, next){
	async.waterfall([
		function (cb){
			models.test.create({
				name: 'Simon'
			}, cb);
		},
		function (test, cb){
			models.test.findAll(cb);
		}
	], function (err, docs){
		if(err){
			return next(err);
		}
		res.render('main/main', {
			names: docs
		});
	});
};