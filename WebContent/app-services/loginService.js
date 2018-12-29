//loginService.js
var app = angular.module('myApp');
app.factory('LoginService', ['$http', '$q',function($http, $q) {
var admin = 'admin';
var pass = 'password';
var isAuthenticated = false;

	return {
		login : function(rollno, password) {
			return $http.get('http://localhost:8080/check?rollno='+rollno+'&password='+password)
		    .then(
		            function(response){
		//            	console.log(response.data.rollno);
		                return response.data;
		            }, 
		            function(errResponse){
		//                console.error('Error while fetching users');
		                return $q.reject(errResponse);
		            }
		    );
		}
	};
}]);



//app.factory('AdminLoginService',['$http','$q',function($http,$q){
//var admin='admin';
//var pass='password';
//var isAuthenticated = false;
//
//return{
//	login:function(id, password){
//		return $http.get('http://localhost:8080/admincheck?id='+id+'&passoword='+password+'')
//		.then(
//				function(response){
//					return response.data;
//				},
//				function(errResponse){
//					console.error('Error While Fetching Adminusers');
//					return $q.reject(errResponse);
//				}
//		)
//	}
//};
//}]);