'use strict';

angular
        .module(
        		'simpleWeb',
        		['ngRoute']
        		)
        		
        //application configuration
        .config ( [, ) {
	
			console.log(" Inside simpleWeb config " );
	
		} ] )
		
		//main page controller
		.controller ( 'appCtrl', [ '$rootScope', 
						function ( $rootScope) {
			
			console.log(" Inside appCtrl " );
				} 
						
			
			
		])
		