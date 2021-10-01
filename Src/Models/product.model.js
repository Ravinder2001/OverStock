/** @format */

const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
	{
		image1: { type: String, required: true },
		image2: { type: String, required: true },
		price: { type: Number, required: true },
		name: { type: String, required: true },
		rating: { type: Number, required: true },
	},
	{
		versionkey: false,
	}
);
const Product = mongoose.model('products', productSchema);
module.exports = Product;
