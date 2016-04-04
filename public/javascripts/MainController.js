angular.module('footballApp',['ngRoute'])
	.controller("MainCtrl",["$http","$scope",function($http,$scope){
		$scope.teams = ["manchester united",
		"arsenal",
		"real madrid"
	];
	}])
	.directive('topBar', function() {
		return {
			restrict: 'E',
	  	 	templateUrl: '/views/elements/top-bar.html',
	  };
	});