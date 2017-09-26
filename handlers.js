// var Book = require('./models/book.js');
// var jwt = require('jwt-simple');


module.exports.handleUsers = {
  signin : function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username})
      .then(function (user) {
        if (!user) {
          res.status(404).json("user not found")
        }
      });
  },
}
 
module.exports.handelBook={showbook : function(req, res)  {
    Book.getBooks(function(err, books)  {
      if(err){
        throw err;
      }
      res.json(books);
    });
  },
}