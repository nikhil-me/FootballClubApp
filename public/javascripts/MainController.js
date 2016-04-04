angular.module('footballApp',['ngRoute'])
	.controller("MainCtrl",["$http","$scope",function($http,$scope){
		$scope.teams = ["Manchester United",
		"Arsenal",
		"Real Madrid"
	];
	}])
	.directive('topBar', function() {
		return {
			restrict: 'E',
	  	 	templateUrl: '/views/elements/top-bar.html',
	  };
	});