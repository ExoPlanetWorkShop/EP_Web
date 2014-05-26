var mongoose = require('mongoose');

// 定義 mongoose Schema
var newSchema = new mongoose.Schema({
	name: {
		type: String
	}
});

// 定義這個 Schema 的 static method
newSchema.static('findAll', function (next) {
  return this.find({}, next);
});

var testModel = mongoose.model('EP_Web', newSchema);

module.exports = testModel;