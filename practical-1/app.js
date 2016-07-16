// creating module
var myApp = angular.module('myApp', []);

// creating controller
var myController = function($scope){
	$scope.message = "Welcome to angular js";
};

// registring controller with module
myApp.controller('myController',myController);

/*
// creation of module, cotroller and registring controller with module in singel statement
angular.module('myApp', []).controller('myController',function($scope){
	$scope.message = "Welcome to angular js.";
});*/