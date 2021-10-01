/** @format */

const express = require('express');

const router = express.Router();

const Product = require('../Models/product.model');
const Register = require('../Models/signUp.model');
router.post('', async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.send(product);
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('', async (req, res) => {
	try {
		const product = await Product.find().lean().exec();

		return res.render('home', {
			product,
		});
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/products/items/:id', async (req, res) => {
	try {
		const item = await Product.find({ _id: `${req.params.id}` })
			.lean()
			.exec();

		return res.render('item', {
			item: item,
		});
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/login', async (req, res) => {
	try {
		let msg = '';
		let loginmsg = '';
		return res.render('login', {
			msg,
			loginmsg,
		});
	} catch {
		return res.send(err.message);
	}
});

router.post('/login', async (req, res) => {
	try {
		const details = await Register.find().lean().exec();
		let temp = true;
		details.forEach(el => {
			if (req.body.email == el.email || req.body.mobile == el.mobile) {
				temp = false;
			}
		});
		if (temp) {
			const signUp = await Register.create(req.body);
			const product = await Product.find().lean().exec();
			res.render('home', {
				product,
				details,
			});
		} else {
			let msg = 'Invalid details';
			let loginmsg = '';
			res.render('login', {
				msg,
				loginmsg,
			});
		}
	} catch (err) {
		return res.send(err.message);
	}
});
router.post('/user', async (req, res) => {
	try {
		const details = await Register.find().lean().exec();
		let temp = false;
		details.forEach(el => {
			if (req.body.email == el.email && req.body.password == el.password) {
				temp = true;
			}
		});
		if (temp) {
			const product = await Product.find().lean().exec();
			res.render('home', {
				details,
				product,
			});
		} else {
			let msg = '';
			let loginmsg = 'Invalid details';
			res.render('login', {
				msg,
				loginmsg,
			});
		}
	} catch {
		return res.send(err.message);
	}
});
router.get('/cart', async (req, res) => {
	try {
		const details = await Register.find().lean().exec();
		return res.render('cart', {
			details,
		});
	} catch {
		return res.send(err.message);
	}
});
router.get('/payment', async (req, res) => {
	try {
		return res.render('payment');
	} catch {
		return res.send(err.message);
	}
});
router.get('/cart/payment/thank', async (req, res) => {
	try {
		return res.render('thank');
	} catch {
		return res.send(err.message);
	}
});
module.exports = router;
