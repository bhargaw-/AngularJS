angular.module('myApp',[]).
	controller('myController', function($scope,$http){

		$http.get('./employee.json').then(function(response){
			$scope.employees = response.data;
		});			
});