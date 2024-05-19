var express = require('express')
var app = express()

// login page
app.get('/login', function (req, res, next) {
	res.render('pages/auth/login')
})

// Dummy user info for demonstration
const UserInfo = {
	email: 'test@example.com',
	password: 'password'
};

// Custom email validation function
function validateEmail(email) {


	if (!email || email.trim() === '') {
		return {
			param: 'email',
			msg: 'Email cannot be empty.'
		};
	}

	// Basic email format validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return {
			param: 'email',
			msg: 'Invalid email format.'
		};
	}

	return null;
}

// Login endpoint
app.post('/login', async (req, res) => {
	const { email, password } = req.body;

	let errors = [];

	// Validate email
	const emailError = validateEmail(email);
	if (emailError) {
		errors.push(emailError);
	}

	// Validate password
	if (!password || password.trim() === '') {
		errors.push({
			param: 'password',
			msg: 'Password is required.'
		});
	}

	// If there are validation errors, return 400 with error messages
	if (errors.length > 0) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: 'Validation failed',
			errors: errors
		});
	}


	// Check credentials
	if (email === UserInfo.email && password === UserInfo.password) {
		req.session.user = {
			email: UserInfo.email
			// You can add more user information here if needed
		};
		req.flash('success', 'Login successfully!');
		return res.json({
			success: true,
			code: 201,
			message: 'Login successfully!',
			user: req.session.user
		});
	} else {
		req.flash('error', 'Incorrect email or password.');
		return res.status(401).json({
			success: false,
			code: 401,
			message: 'Incorrect email or password.'
		});
	}
});


app.get('/user_info', async (request, response) => {
	return response.send(200);
});


// register page
app.get('/register', function (req, res, next) {
	res.render('pages/auth/register')
})

module.exports = app