'use strict';

angular
        .module(
        		'simpleWeb',
        		[
        		'ngRoute',
        		'ui.router',
        		'simpleWeb.login'
        		]
        		)
        		
        //application configuration
        .config(['$stateProvider', '$urlRouterProvider', 
		    function($stateProvider, $urlRouterProvider) {
		      $urlRouterProvider.otherwise('/');
		      $stateProvider
		      /*
			      .state('root', {
	  	   			url: '/',
	  	   			templateUrl: './index.html'
			      		})
			    */  		
			      		
			      .state('login', {
	  	   			url: '/login',
	  	   		  view: {
	  	   			templateUrl: './views/login/login.html'
	  	   		  },
					controller: 'LoginCtrl'
			      		})
			      .state('dashboard', {
			        url: '/dashboard',
			        view: {
			        	templateUrl: './views/dashboard/dashboard.html'
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
		