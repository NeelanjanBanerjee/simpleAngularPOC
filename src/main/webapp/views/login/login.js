

'use strict';

angular.module('simpleWeb.login', [])

        .controller('LoginCtrl', ['$scope', '$rootScope','$location', '$state',
            function ($scope, $rootScope, $location, $state) {
        	$scope.loginData = {};
        		console.log ("Inside LoginCtrl ");
        		
        		$scope.loginData.username = "Name";
        		$scope.loginData.password = "Password";
        		
        		
        		
        		 $scope.login = function() {
                 	$state.go('dashboard', {}, {reload: true});
                 };
                
            }]);


