var myApp = angular.module("myApp",[]);

myApp.controller('myController', function($scope){
	
	var employee = {
		firstName : "Bhargav",
		lastName : "Vandana",
		gender : "Male"
	};

	$scope.employee = employee;
})
