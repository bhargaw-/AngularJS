angular.module('myApp',[]).
	controller('myController', function($scope){
	var technologies = [
		{
			name:"JAVA",
		 	likes : 0,
		 	dislikes : 0		 		 
		},
		{
		 	name:"SPRING",
			likes : 0,
			dislikes : 0
		},
		{
		 	name:"HIBERNATE",
		 	likes : 0,
		 	dislikes : 0
		},
		{
		 	name:"LIFERAY",
		 	likes : 0,
		 	dislikes : 0
		}
	];

	$scope.technologies = technologies;

	$scope.incrementLikes = function(technology){
		technology.likes+=1;
	}

	$scope.incrementDislikes = function(technology){
		technology.dislikes+=1;
	}

	});