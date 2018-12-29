var app = angular.module('myApp');
app.factory('ApplyiedOnDutyService', ['$http', '$q',function($http, $q) {
	return {
		applyiedOD:function(){
			return $http.get('http://localhost:8080/appliedOD?rollno=15ITR112')
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
