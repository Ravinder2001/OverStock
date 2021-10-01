/** @format */

const mongoose = require('mongoose');

const connect = () => {
	return mongoose.connect(
		'mongodb+srv://ravinder:ravinder@OverStock.1xhgt.mongodb.net/overStock?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);
};

module.exports = connect;
