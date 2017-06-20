

'use strict';

angular.module('wrightUDI.login', [
    'wrightUDI.authenticationService'
])

        .controller('LoginCtrl', ['$scope', '$rootScope','$location', 'AuthenticationService',
            function ($scope, $rootScope, $location, AuthenticationService) {
                // reset login status
                AuthenticationService.ClearCredentials();
                //within login page, dont allow location change unless auth done
                $rootScope.allowLocationChange = false;
                $scope.login = function () {
                    //console.log("Processing data :"+JSON.stringify($scope.loginData));
                    $scope.dataLoading = true;
                    $scope.error = "";
                    AuthenticationService.Login($scope.loginData.username, $scope.loginData.password, function (response) {
                        if (response.errCode) {
                            //login failed
                            $scope.error = response.errMsg;
                            $scope.dataLoading = false;
                        }
                        else if(typeof response === 'string' && response.indexOf('<html>') !== -1){
                            $scope.error = 'Something went wrong. Please try again later.';
                            $scope.dataLoading = false;
                        }
                        else {
                            console.log("Login success");
                            console.log("Login Data id :: " + response.id);
                            console.log("Login Data name :: " + response.name);
                            console.log("Login Data role :: " + response.role);
                            console.log("Login Data group :: " + response.group);
                            //console.log("User rolebased data :: " , response.rolebasedData );
                            
                            //setting login info in global scope for access from everywhere
                            $rootScope.user.id = response.id;
                            $rootScope.user.name = response.name;
                            if (response['role'] === undefined || response['role'] === null) {
                                $rootScope.showBasicModal('views/modals/permission-denied.html');
                            }
                            else {
                                $rootScope.user.role = response.role;
                            }
                            if (response['group'] === undefined || response['group'] === null) {
                                $rootScope.showBasicModal('views/modals/permission-denied.html');
                            }
                            else {
                                $rootScope.user.group = response.group;
                            }
                            //$rootScope.user.avatar = '';
                            //$rootScope.user.memberSince = 'Jan. 2016';
                            //$rootScope.user.config = response.rolebasedData.roleBasedOperationData;


                            AuthenticationService.SetCredentials($scope.username, $scope.password);
                            //auth done. allow location change
                            $rootScope.allowLocationChange = true;
                            $location.path('/dashboard');
                        }
                    });
                };
            }]);


