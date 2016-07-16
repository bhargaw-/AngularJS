angular.module("myApp",[]).controller("myController", function($scope){

	var country = {
		name : "India",
		capital : "New Delhi",
		flag : "./images/flag.png"
	};

	$scope.country=country;
});
