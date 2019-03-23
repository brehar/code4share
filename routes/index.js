const express = require('express');
const { check, validationResult } = require('express-validator/check');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', { title: 'Home' });
});

router.get('/about', (req, res) => {
	res.render('about', { title: 'About Us' });
});

router
	.route('/contact')
	.get((req, res) => {
		res.render('contact', { title: 'Contact Us' });
	})
	.post(
		[
			check('name', 'You must supply your name.')
				.not()
				.isEmpty()
				.trim()
				.escape(),
			check('email', 'The email address you entered is invalid.')
				.isEmail()
				.normalizeEmail(),
			check('message', 'Please include a message.')
				.not()
				.isEmpty()
				.trim()
				.escape()
		],
		(req, res) => {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.render('contact', {
					title: 'Contact Us',
					name: req.body.name,
					email: req.body.email,
					message: req.body.message,
					errors
				});
			}

			res.render('thanks', { title: 'Message Received' });
		}
	);

module.exports = router;
