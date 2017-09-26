
angular.module('books',
 [
 'book.services'
	]);
.config(function(){

	
    .when('/signin', {
      templateUrl: `app/account/signin.html`,
      controller: 'AuthController'
    })     

})
