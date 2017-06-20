'use strict';

angular
        .module(
        		'simpleWeb',
        		['ngRoute', 'ui.router']
        		)
        		
        //application configuration
        .config(['$stateProvider', '$urlRouterProvider', 
		    function($stateProvider, $urlRouterProvider) {
		      $urlRouterProvider.otherwise('/login');
		      $stateProvider
		      .state('home', {
		        url: '/dashboard',
		        view: {
		        	''			: {templateUrl: './templates/dashboard.html'},
		        	'nav@home'  : {templateUrl: './dashboard/nav.html'},
		        	'body@home' : {templateUrl: './dashboard/body.html'}
		        }
		      });
		    }
        	])

        	
		//main page controller
		.controller ( 'appCtrl', [ '$rootScope', '$scope', 
						function ( $rootScope, $scope) {
			
			console.log(" Inside appCtrl " );
            $scope.appName = "Simple WebApp ";
			
			
			
			
				} 
						
			
			
		])
		