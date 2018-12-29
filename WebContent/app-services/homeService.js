var app = angular.module('myApp');
app.factory('HomeService', ['$http', '$q',function($http, $q) {
	return {
		home:function(data){
			return $http.get('http://localhost:8080/details?rollno=15ITR112')
			.then(
					function(response){
//						console.log(response.data.rollno);
		                return response.data;
					}, 
		            function(errResponse){
//							console.error('Error while fetching users');
			                return $q.reject(errResponse);
		            }
				);
			}
		};
}]);
