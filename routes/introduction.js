var express = require('express')
var app = express()

app.get('/page-1', function (req, res, next) {
	res.render('pages/introduction/page-1')
})

app.get('/page-2', function (req, res, next) {
	res.render('pages/introduction/page-2')
})

app.get('/page-3', function (req, res, next) {
	res.render('pages/introduction/page-3')
})

app.get('/page-4', function (req, res, next) {
	res.render('pages/introduction/page-4')
})

module.exports = app
