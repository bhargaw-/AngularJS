angular.module("myApp",[]).controller("myController", function($scope,$location,$anchorScroll){

	$scope.scrollTo=function(divId){
		$location.hash(divId);
		$anchorScroll();
	};
});
