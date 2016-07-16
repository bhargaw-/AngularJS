# AngularJS

What is angular JS?
Angular js is a javascript framework that helps build web applications

Benfits of angularJS
 Dependency Injection
 Two way data binding
 Both unit and end to end testing
 Model View Controller
 Control behaviours of DOM elements(Using Directives & Filters etc...)

What is a module in angular JS?
	A module is a container for different parts of your application i.e controllers, services, directives, filters etc.

How to create a module?
	Use the angular object's module() method to create a module.
		Eg: var myApp = angular.moduel('myModule',[]);

What is a controller in angular?
	In angular a controller is a Javascript function. The job of the controller is to build a model for the view to display.

	Eg: var myController = function($scope){
		$scope.message = "Hello World!!";
	}


