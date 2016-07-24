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


<strong>Filters  </strong> <br>
	
Filters can do 3 different(Formate, Sort and Filter data) things. <br>
Filters can be used with a binding expression or a directive.
To apply filter use pipe(|) character.
	
	syntax: {{expression | filterName:parameter}}


<strong>ng-init  directive </strong> <br>
	<ul>
		<li>ng-init directive allows you to evaluate an expression in current scope</li>
		<li>In real world, should use a contoller to initialize values on a scope instead of ng-init</li>
		<li>ng-init should only be used for aliasing special properties of ng-repeat directive</li>
	</ul>
	
<strong>ng-include  directive </strong> <br>
	<ul>
		<li> directive is used to embed an HTML page into another HTML page. This techinique is very useful when you want to reuse a specific view in multiple pages in your application.
		</li>
		<li> <strong>value for ng-include directive is, name of the another HTML page that you want to reuse</strong>

		Eg: <div ng-include = "employee-list.html"> </div>

				or

			<div ng-include = "employeeList"> </div> (A property on the $scope object that points to the reusable HTML page)

<strong>$http service in angular</strong>
<br>
<ul>
	<li> $http service is used to make HTTP request to remote server </li>
	<li> $http service is funtion that has single input parameter i.e configuration object.</li>
</ul>
	
	Eg: $http({
			method : "GET",
			url : '/employee.json'
		});

If the data property of the request configuration object contains a javascript object, it is automatically converted into JSON object.
<br>

<strong>What is a service in angular?</strong><br>
A service in angular is simply an object that provides some sort of service that can be reused with in an angular application.
<br>

<strong>Why do we need services?</strong><br>
Services encapsulates reusable logic that does not belong anywhere else (i.e Directives, Filters, Views, Models & Controllers)
<br>

<strong>what are the benifits of using services?</strong><br>
<ul> 
	<li>Reusability</li>
	<li>Dependancy Injection</li>
	<li>Testability</li>
</ul>