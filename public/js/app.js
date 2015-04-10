var app = angular.module('FlashCards', ['ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			template: '<h1>Hello</h1>'
		})
        .state('addcard', {
			url: '/addcard',
			templateUrl: 'templates/newcard.html'
		})
//        .state('Express', {
//            url: 'home/express',
//			templateUrl: 'templates/loadedcard.html'
//		})


        .state('frog', {
            url: '/:category',
			templateUrl: 'templates/loadedcard.html'
		})
//        .controller('MainController', function($scope){
//                $scope.categories = [
//        'MongoDB',
//        'Express',
//        'Angular',
//        'Node'
//    ];
//        })



})
