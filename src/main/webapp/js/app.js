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
		      .state('dashboard', {
		        url: '/dashboard',
		        view: {
		        	'header'	: {templateUrl: './dashboard/header.html'},
		        	'nav'	  	: {templateUrl: './dashboard/nav.html'},
		        	'body' 		: {templateUrl: './dashboard/body.html'}
		        }
		      })
		       .state('login', {
		    	   			url: '/',
		    	   			templateUrl: './dashboard/login.html'
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
		