var app = angular.module('myApp',[])
.controller('myController', function($scope){
	
	var employees =[{name : "ABCDE", gender : 1, salary : 20000},
					{name : "BCDEA", gender : 2, salary : 10000},
					{name : "CDEAB", gender : 3, salary : 15000},
					{name : "DEABC", gender : 2, salary : 15000},
					{name : "EABCD", gender : 1, salary : 25000}
				];

	$scope.employees = employees;
	$scope.hideSal = true;
});