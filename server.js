const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');
var path= require('path');
var handlers = require('./handlers.js')
// var Book = require('./models/book');


app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded());


// Connect to Mongoose
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookstore');
// var db = mongoose.connection;

// // db.once('open',function () {
// // 		console.log('mongoDB is open');
// // 	});
var users = [];

app.post('/signup', function(req, res){
	users.push([req.body.name,req.body.pass])
	res.sendFile(path.join(__dirname + '/client/app/account/signin.html'))
});

app.post('/signin', function(req, res){
	for (var i=0; i<users.length ;i++){
		console.log(users[i][0])
		if (users[i][0] === req.body.name && users[i][1] === req.body.pass){
			res.sendFile(path.join(__dirname + '/client/index.html'))
		}
	} 
});
// app.get('/api/users', handlers.handleUsers.getUsers);

var port =8000;
app.listen(process.env.PORT || 8000)
console.log('Running on port 8000...');

module.exports = app;