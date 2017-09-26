const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');

var handlers = require('./handlers.js')
// var Book = require('./models/book');


app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());


// Connect to Mongoose
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookstore');
// var db = mongoose.connection;

// // db.once('open',function () {
// // 		console.log('mongoDB is open');
// // 	});

app.post('/api/users/signin', handlers.handleUsers.signin);
// app.get('/api/users', handlers.handleUsers.getUsers);

var port =8000;
app.listen(port,function (){;
console.log('Running on port 8000...')
});

module.exports = app;