angular.module('footballApp')
.config(function ($routeProvider) {

	$routeProvider

	.when('/:team', {

		templateUrl: '/views/teamDetails.html',
		controller: "TeamController"
	})
	.otherwise('/football');

});
