/*var app = angular.module("myApp",[]).controller("myController", function($scope,$http){
    
   $scope.content="./home.html";

    $scope.getHomePage=function(){
        $scope.content="./home.html";
    }
    
    $scope.getCources=function(){
      $http.get('./cources.json').then(function(response){
            $scope.content="./cources.html";
            $scope.cources= response.data;
        },function(reason){alert(reason.data);});
    }
     
    $scope.getStudents=function(){
       $http.get('./students.json').then(function(response){
            $scope.content="./students.html";
            $scope.students= response.data;
        },function(reason){alert(reason.data);});
    }
});*/


var app = angular.module("myApp",[]).controller("myController", 
    function($scope,$http,$log,getServices){
    
   $scope.content="./home.html";

    $scope.getHomePage=function(){
        $scope.content="./home.html";
    }
    
    $scope.getCources=function(){
            $scope.content="./cources.html";
            getServices.getCources($http,$log,$scope);
    }
     
    $scope.getStudents=function(){      
            $scope.content="./students.html";
            getServices.getStudents($http,$log,$scope);
    }
});