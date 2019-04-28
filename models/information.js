var mongoose = require('mongoose');

var InformationSchema = new mongoose.Schema( {
	name: {
		type: String,
		required: 'Nachiket',
		default: "XYZ"
	}, 
	age: {
		type: Number,
		default: 25
	}, 
	created_date: {
		type: Date,
		default: Date.now
	}
})

var Info = mongoose.model('Info', InformationSchema);

module.exports = Info;