angular.module('myApp',[]).
	controller('myController', function($scope){
		
		var employees = [

			{
				name :"ABCDE",
				department:"DEPT-1",
				gender : "Male",
				salary : 1000,
				date : new Date('January 01,1999')

			},
			{
				name : "DEABC",
				department:"DEPT-2",
				gender : "Female",
				salary : 4000,
				date : new Date('February 29,2004')

			},
			{
				name : "EABCD",
				department:"DEPT-3",
				gender : "Male",
				salary : 12000,
				date : new Date('March 15,1986')

			},
			{
				name : "BCDEA",
				department:"DEPT-1",
				gender : "Female",
				salary : 1500,
				date : new Date('January 29,2004')

			},
			{
				name : "CDEAB",
				department:"DEPT-2",
				gender : "Male",
				salary : 9000,
				date : new Date('February 29,2004')

			}
		];

	$scope.employees = employees;
	var page = $scope.viewType == 'table' ? './employee-list (table).html': $scope.viewType == 'ul' ? './employee-list (ul).html':'';
	$scope.employeeList = page;
	
});