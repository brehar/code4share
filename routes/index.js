const express = require('express');

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
	.post((req, res) => {
		res.render('thanks', { title: 'Message Received' });
	});

module.exports = router;
