
// Your survey should have 10 questions of your choosing. 
// Each answer should be on a scale of 1 to 5 based on 
// how much the user agrees or disagrees with a question.
// Your `server.js` file should require the basic npm packages we've used in class: 
// `express`, `body-parser`, `path`, `mysql`, `method-override`, etc.

var express = require ('express');
var app = experss();

var mysql = require('mysql');

var bodyParser = require('body-parser');
const path = require('path');
var methodOverride = require('method-override');
app.use(methodOverride('_method'));





app.get('/', function (req, res) {
   res.send('Hello World');
})










app.listen(3000, function(){
	console.log('listening on 3000');
});