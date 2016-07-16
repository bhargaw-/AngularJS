angular.module('myApp',[]).
	controller('myController', function($scope){
		
		var employees = [

			{
				name :"Employee1",
				department:"DEPT-1",
				gender : "Male",
				salary : 1000

			},
			{
				name : "Employee-2",
				department:"DEPT-2",
				gender : "Female",
				salary : 4000

			},
			{
				name : "Employee-3",
				department:"DEPT-3",
				gender : "Male",
				salary : 2000

			},
			{
				name : "Employee-4",
				department:"DEPT-1",
				gender : "Female",
				salary : 1500

			},
			{
				name : "Employee-5",
				department:"DEPT-2",
				gender : "Male",
				salary : 9000

			}
		];

		$scope.employees = employees;
	});