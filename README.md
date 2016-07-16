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

<strong>Register controller with module</strong><br>
	
	Eg: myApp.controller('myController',myController);

<strong>Two way data binding:</strong><br>
	Keeps the model and view in syc at all the time, that is a change in the model updates the view and a change in the view updates the model.
	<strong>ng-model</strong> directive can be used with <br>
		<ul>
			<li>input</li>
			<li>select</li>
			<li>textarea</li>
		</ul>
<strong>Finding the index of an item in the collection : </strong>
	<ul>
		<li>Use <strong>$index</strong></li>
		<li>Get index of parent element</li>
		<ul>
			<li>Use <strong>$parent.$index</strong></li>
			<li>Use <strong>ng-init="parentIndex=$index"</strong></li>
		</ul>
	</ul>

<strong>Handling Events</strong>

	Eg: <input type="button" value="Like" data-ng-click="incrementLikes(technology)"></input> 
		<input type="button" value="Dislike" data-ng-click="incrementDislikes(technology)"></input>

		$scope.incrementLikes = function(technology){
			technology.likes+=1;
		}

		$scope.incrementDislikes = function(technology){
			technology.dislikes+=1;
		}

