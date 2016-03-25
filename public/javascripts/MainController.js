angular.module('footballApp',['ngRoute'])
	.controller("MainCtrl",["$http","$scope",function($http,$scope){
	}])
	.directive('topBar', function() {
		return {
			restrict: 'E',
	  	 	templateUrl: '/views/elements/top-bar.html',
	  };
	});


