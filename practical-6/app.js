angular.module('myApp',[]).
	controller('myController', function($scope){
	var countries = [

		{
			name:"INDIA",
		 	cities:[
		 		{name:"New Delhi"},
				{name:"Hyderabad"},
		 		{name:"Banagalore"}
		 	]		 		 
		},
		{
		 	name:"US",
			cities:[
				{name:"New York"},
		 		{name:"Chicago"},
		 		{name:"Los Angeles"}
		 	]
		},
		{
		 	name:"UK",
		 	cities:[
		 		{name:"London"},
		 		{name:"Manchester"},
		 		{name:"Birminghum"}
		 	]
		}
	];

	$scope.countries = countries;
	});