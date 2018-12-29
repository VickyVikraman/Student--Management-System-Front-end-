var app = angular.module('myApp');
app.factory('ApplyOnDutyService',['$http','$q',function($http,$q){

	var isAuthenticated = false;
	return{
		applyOD:function(data)
		{
			alert(data);
			console.log(data);
			return $http({
				method:"POST",
				url:"http://localhost:8080/apply",
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
