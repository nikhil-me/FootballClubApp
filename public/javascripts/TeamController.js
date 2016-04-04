angular.module('footballApp')
	.controller("TeamController",["$http","$scope","$timeout","$routeParams","$route" ,function($http,$scope,$timeout,$routeParams,$route){
		$scope.team = $routeParams.team;
		console.log($scope.team);
	}]);


