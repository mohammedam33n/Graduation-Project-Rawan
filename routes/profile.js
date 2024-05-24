var express = require('express')
var app = express()

// SHOW LIST OF USERS
app.get('/detail', function (req, res, next) {
	res.render('pages/profile/detail')
})

// SHOW EDIT USER FORM
app.get('/show/(:id)', function (req, res, next) {
	res.render('pages/profile/detail')
})

// EDIT USER POST ACTION
app.put('/edit/(:id)', function (req, res, next) {

})

module.exports = app
