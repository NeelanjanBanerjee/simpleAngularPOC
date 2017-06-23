

'use strict';

angular.module('simpleWeb.login', [])

        .controller('LoginCtrl', ['$scope', '$rootScope','$location',
            function ($scope, $rootScope, $location) {
        	
        		console.log ("Inside LoginCtrl ");
        		
        		$scope.loginData.username = "Name";
        		$scope.loginData.password = "Password";
        		
        		
                
            }]);


