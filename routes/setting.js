var express = require('express')
var app = express()

app.get('/', function (req, res) {
	res.render('pages/setting/detail')
})




/** 
 * We assign app object to module.exports
 * 
 * module.exports exposes the app object as a module
 * 
 * module.exports should be used to return the object 
 * when this file is required in another module like app.js
 */
module.exports = app;
