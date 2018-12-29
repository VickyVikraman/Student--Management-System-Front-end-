//loginController-js 
var app = angular.module('myApp');
app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
var user = this;
user.data=[];
$scope.formSubmit = function(){
	LoginService.login($scope.rollno, $scope.password)
        .then(
                     function(data) 
                     {
//                    	 console.log(data);
                    	 $rootScope.rollnumber=data.rollNumber;
//                    	 console.log($rootScope.rollnumber);
                          if(data.success == true)
                          {
                        	  if(data.newUser == true)
                        	  {
                        		  
                        		  $state.go('register');  
                        	  }
                        	  else
                        	  {
                        		  if(data.status == 0)
								  {
                        			  console.log(data);
                        			  $rootScope.rollnumber=data.rollNumber;
                        			  console.log($rootScope.rollnumber);
									 $state.go('update');		  
								  }	  
                        		  else
                    			  {
                        			  $state.go('home');
                    			  }
                        		    
                        	  }
                        	  console.log(self.users);
                          }  
                          else
                    	  {
                        	  alert("Rollno or Password was wrong");
                    	  }
                     }
             );
};
});
var flag=1;
app.controller('RegisterController',function($scope, $rootScope,$state, RegistrationService){
	$scope.data={};
	$scope.user={};
	$scope.address={};
	$scope.contact={};
	$scope.school={};
	$scope.address.rollno=$rootScope.rollnumber;
	$scope.contact.rollno=$rootScope.rollnumber;
	$scope.school.rollno=$rootScope.rollnumber;
	$scope.data.user=$scope.user;
	$scope.data.address=$scope.address;
	$scope.data.contact=$scope.contact;
	$scope.data.school=$scope.school;
	$scope.validation=function()
	{
		alert("hii");
		console.log($scope.user.rollno);
		console.log($scope.address);
		console.log($scope.contact);
		console.log($scope.school);
		console.log($scope.data);
		RegistrationService.register($scope.data)
		.then(function(data){
			console.log(data.success);
		})
	}
	$scope.sample=function()
	{
		$state.go('sample');
	}
});
app.controller('ApplyController',function($scope,$rootScope,ApplyOnDutyService){
	$scope.od={};
	$scope.od.rollno="15ITR112";
	$scope.od.name="Vigraman V";
	$scope.apply=function()
	{
		alert("hii");
		ApplyOnDutyService.applyOD($scope.data)
		.then(function(data){
			console.log("hii");
		})
		console.log($scope.od);
	}
});
app.controller('AppliedController',function($scope,$rootScope,ApplyiedOnDutyService){
	ApplyiedOnDutyService.applyiedOD()
	.then(
			function(data)
			{
				$scope.myArray=data;
				console.log(data);
			}
		)
	console.log($scope.od);
});
app.controller('HomeController', function($scope, $rootScope, $state, HomeService) {
	HomeService.home()
	.then(
			function(data)
			{
				$scope.data=data;
				$scope.rollno=$scope.data.contact.rollno;
//				Personal Details
				
//				Contact Details
				$scope.contact=$scope.data.contact;
//				Address Details
				$scope.address=$scope.data.address;
//				school
				if(($scope.data.school.diploma!="")&&($scope.data.school.hsc!=""))
				{
					$scope.school=$scope.data.school;
				}
				else if($scope.data.school.hsc!="")
				{
					$scope.sslc=$scope.data.school.sslc;
					$scope.sslcPercentage=$scope.data.school.sslcPercentage;
					$scope.sslcPassing=$scope.data.school.sslcPassing;
					$scope.hsc=$scope.data.school.hsc;
					$scope.hscPercentage=$scope.data.school.hscPercentage;
					$scope.hscPassing=$scope.data.school.hscPassing;
					$scope.diploma="-";
					$scope.diplomaPercentage='-';
					$scope.diplomaPassing='-';
				}
				else if($scope.data.school.diploma!="")
				{
					$scope.sslc=$scope.data.school.sslc;
					$scope.sslcPercentage=$scope.data.school.sslcPercentage;
					$scope.sslcPassing=$scope.data.school.sslcPassing;
					$scope.hsc='-';
					$scope.hscPercentage='-';
					$scope.hscPassing='-';
					$scope.diploma=$scope.data.school.diploma;
					$scope.diplomaPercentage=$scope.data.school.diplomaPercentage;
					$scope.diplomaPassing=$scope.data.school.diplomaPassing;
				}
				
				console.log($scope.data);
			}
		);
});
app.controller('UpdationController',function($scope, $rootScope, UpdationService){
	UpdationService.update()
	.then(function(data){
		console.log(data);
		$scope.data=data;
		$scope.address=$scope.data.address;
		$scope.contact=$scope.data.contact;
		$scope.school=$scope.data.school;
		$scope.user=$scope.data.school;
	})
	
});

app.controller('AdminLoginController',function($scope, $rootScope, $stateParams, $state, LoginService) {
var user = this;
user.data=[];
     
$scope.adminFormSubmit = function(){
	AdminLoginService.login($scope.id, $scope.password)
        .then(
                     function(data) {
                          user.data = data;
                          if(user.data.success == true){
                        	  $state.go('Adminhome');
                          }
                          console.log(self.users);
                     },
                      function(errResponse){
                          console.error('Error while fetching Currencies');
                      }
             );
};
});


