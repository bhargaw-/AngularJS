app.factory('getServices', function(){
	return {
			getCources:function($http,$log,$scope){
				$http.get('./cources.json').then(function(response){
				$log.info(response);
	            $scope.cources = response.data;
	       	 },function(reason){alert(reason.data);});
	        },

			getStudents:function($http,$log,$scope){
				$http.get('./students.json').then(function(response){
	            $scope.students = response.data;
	        	},function(reason){alert(reason.data);});
	        }
	}
});