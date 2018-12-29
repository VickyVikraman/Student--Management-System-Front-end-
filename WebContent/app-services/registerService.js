var app = angular.module('myApp');
app.factory('RegistrationService',['$http','$q',function($http,$q){

	var isAuthenticated = false;
	return{
		register:function(data)
		{
			console.log(data);
			return $http({
				method:"POST",
				url:"http://localhost:8080/register",
				data:data
			}).then(function(response)
			{
				return response.data;
			},function(errResponse){
				return $q.reject(errResponse);
			}
			);
		}
	}
}]);
