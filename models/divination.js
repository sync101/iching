var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var Divination = new Schema({ 

	primary : String 

});

module.exports = mongoose.model('Divination', Divination);