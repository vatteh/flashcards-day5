var app = angular.module('FlashCards', ['ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			template: '<h1>Hello</h1>'
		})
})