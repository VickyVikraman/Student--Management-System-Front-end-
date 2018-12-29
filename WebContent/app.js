//app.js
(function() {
var app = angular.module('myApp', ['ui.router']);
app.run(function($rootScope, $location, $state, LoginService) {
	console.clear();
	console.log('running');
	$state.transitionTo('login');
	});
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('login', {
		url : '/login',
		templateUrl : 'login/studentlogin.html',
		controller : 'LoginController'
		})
		.state('home', {
		url : '/home',
		templateUrl : 'home/home.html',
		controller : 'HomeController'
		})
		.state('register',{
			url:'/register',
			templateUrl:'register/register.html',
			controller:'RegisterController'
		})
		.state('update',{
			url:'/update',
			templateUrl:'register/register.html',
			controller:'UpdationController'
		})
		.state('apply',{
			url:'/apply',
			templateUrl:'home/apply.html',
			controller:'ApplyController'
		})
		.state('applied',{
			url:'/applied',
			templateUrl:'home/applied.html',
			controller:'AppliedController'
		});
		$urlRouterProvider.otherwise('/home');
	}]);
})();