/** @format */

const mongoose = require('mongoose');
const signUpSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		name: { type: String, required: true },
		mobile: { type: Number, required: true, unique: true },
		password: { type: String, required: true },
		cartItems: { type: Object, required: false },
	},
	{
		versionkey: false,
	}
);
const Register = mongoose.model('register', signUpSchema);
module.exports = Register;
