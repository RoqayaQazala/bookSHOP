
angular.module('books')
 .component('app',{

})
.config(function(){

	
    .when('/signin', {
      templateUrl: `app/account/signin.html`,
      controller: 'AuthController'
    })     

})


