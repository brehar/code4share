const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', { title: 'Home' });
});

router.get('/about', (req, res) => {
	res.render('about', { title: 'About Us' });
});

router.get('/contact', (req, res) => {
	res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
