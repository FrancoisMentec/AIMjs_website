var app = angular.module('AIM', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		// Route
		$routeProvider
			.when('/', {
				controller: 'HomeController',
				templateUrl: '/views/home.html'
			})
			.when('/examples', {
				controller: 'ExamplesController',
				templateUrl: '/views/examples.html'
			})
			.when('/examples/glass-reverse', {
				controller: 'GlassReverseController',
				templateUrl: '/views/glass-reverse.html'
			})
			.when('/examples/8-puzzle', {
				controller: '8PuzzleController',
				templateUrl: '/views/8-puzzle.html'
			})
			.otherwise({
				redirectTo: '/'
			})

		$locationProvider.html5Mode(true)
	})
