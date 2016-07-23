angular.module('myApp',[]).
	controller('myController', function($scope,$http,$log){

		/*$http.get('./employee.json').then(function(response){
			$scope.employees = response.data;
		});	*/	

		$http({
			mehotd : 'GET',
			url : './employee.json'
		}).then(function(response){
			$log.info(response);
			$log.info(response.status);
			$log.info(response.statusText);
			$log.info(response.config);
			$log.info(response.config.headers.Accept);
			$scope.employees = response.data;
		},function(reason){
			$log.info(reason);
			$scope.error = reason.data;
		});	
});