var app = angular.module('myApp');
app.factory('UpdationService',['$http','$q',function($http,$q){

	var isAuthenticated = false;
	return{
		update:function()
		{
			console.log("hii");
			return $http.get('http://localhost:8080/update?rollno=15ITR112')
			.then(function(response)
			{
//				console.log(response);
				return response.data;
			},function(errResponse){
				return $q.reject(errResponse);
			});
		}
	}
}]);
