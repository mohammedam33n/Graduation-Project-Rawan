var express = require('express')
var app = express()

app.get('/', function (req, res, next) {
	res.render('pages/trip/detail')
})

app.get('/list', function (req, res, next) {
	res.render('pages/trip/list')
})

// SHOW EDIT USER FORM
app.get('/show/(:id)', function (req, res, next) {

})



module.exports = app
