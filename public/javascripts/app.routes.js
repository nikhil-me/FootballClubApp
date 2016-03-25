angular.module('footballApp')
.config(function ($routeProvider) {

	$routeProvider

	.when('/football', {

		templateUrl: '/views/teamDetails.html',
		controller: "TeamController"
	})

	.otherwise('/football');

});