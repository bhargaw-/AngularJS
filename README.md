# AngularJS

<strong>What is angular JS?</strong> <br>
Angular js is a javascript framework that helps build web applications

<strong>Benfits of angularJS</strong>
	<ul>
		<li> Dependency Injection</li>
		<li>  Two way data binding</li>
		<li>  Both unit and end to end testing</li>
		<li>  Model View Controller</li>
		<li>  Control behaviours of DOM elements(Using Directives & Filters etc...)</li>
 	</ul>

<strong>What is a module in angular JS?</strong><br>
	A module is a container for different parts of your application i.e controllers, services, directives, filters etc.

<strong>How to create a module?</strong><br>
	Use the angular object's module() method to create a module.
		
		Eg: var myApp = angular.moduel('myModule',[]);

<strong>What is a controller in angular?</strong><br>
	In angular a controller is a Javascript function. The job of the controller is to build a model for the view to display.

	Eg: var myController = function($scope){
		$scope.message = "Hello World!!";
	}

<strong>Two way data binding:</strong><br>
	Keeps the model and view in syc at all the time, that is a change in the model updates the view and a change in the view updates the model.

