var app = angular.module("myApp",['ngRoute'])
.config(function($routeProvider) {
    $routeProvider.when("/home",{
        templateUrl : './home.html',
        controller : "homeController"
        }).when("/cources",{
            templateUrl : './cources.html',
            controller : "courcesController"
        }).when("/students",{
            templateUrl : './students.html',
            controller : "studentsController"
        });
    })
    .controller('homeController', function($scope){
        $scope.heading="Home Page";
    })
    .controller('courcesController', function($scope,$http){
        $scope.heading="Cources Page";
        $http.get('./cources.json').then(function(response){
            $scope.cources= response.data;
        },function(reason){alert(reason.data);});  
    })
    .controller('studentsController', function($scope,$http){
        $scope.heading="Students Page";
        $http.get('./students.json').then(function(response){
            $scope.students= response.data;
        },function(reason){alert(reason.data);});
    });