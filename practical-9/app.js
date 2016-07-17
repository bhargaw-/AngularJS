angular.module('myApp',[]).
	controller('myController', function($scope){
		
		var employees = [

			{
				name :"Employee1",
				department:"DEPT-1",
				gender : "Male",
				salary : 1000,
				date : new Date('January 01,1999')

			},
			{
				name : "Employee-2",
				department:"DEPT-2",
				gender : "Female",
				salary : 4000,
				date : new Date('February 29,2004')

			},
			{
				name : "Employee-3",
				department:"DEPT-3",
				gender : "Male",
				salary : 12000,
				date : new Date('March 15,1986')

			},
			{
				name : "Employee-4",
				department:"DEPT-1",
				gender : "Female",
				salary : 1500,
				date : new Date('January 29,2004')

			},
			{
				name : "Employee-5",
				department:"DEPT-2",
				gender : "Male",
				salary : 9000,
				date : new Date('February 29,2004')

			}
		];

	$scope.employees = employees;
	$scope.rowLimit = 3;
	});