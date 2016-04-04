angular.module('footballApp')
	.controller("TeamController",["$http","$scope","$timeout","$routeParams","$route" ,function($http,$scope,$timeout,$routeParams,$route){
		$scope.team = $routeParams.team;
		$scope.teamDetail;
		console.log($scope.team);
		$http.get('/teams/'+$scope.team)
		.success(function(response){
			$scope.teamDetail=response;
			console.log(response);
		})
		.error(function(err){
			console.log(err);
		})
	}]);


