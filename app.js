const express = require('express');
const mysql = require('mysql');
const path = require('path');
const config = require('./config');
const myConnection = require('express-myconnection');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const auth = require('./routes/auth');
const home = require('./routes/home');
const introduction = require('./routes/introduction');
const trip = require('./routes/trip');
const setting = require('./routes/setting');
const profile = require('./routes/profile');
const index = require('./routes/index');
const users = require('./routes/users');

const app = express();

// Database configuration
const dbOptions = {
	host: config.database.host,
	user: config.database.user,
	password: config.database.password,
	port: config.database.port,
	database: config.database.db
};

// Middleware setup
app.use(myConnection(mysql, dbOptions, 'pool'));
app.use(expressValidator());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cookieParser('keyboard cat'));
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));
app.use(flash());

// View engine setup
app.set('view engine', 'ejs');

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Routes
app.use('/', index);
app.use('/home', home);
app.use('/users', users);
app.use('/setting', setting);
app.use('/profile', profile);
app.use('/introduction', introduction);
app.use('/trip', trip);
app.use('/auth', auth);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
