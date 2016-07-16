angular.module('myApp',[]).
	controller('myController', function($scope){
		var person = {
			name : "Bhargav",
			age : 29,
			gender : "Male"
		};

		$scope.person = person;	
	})