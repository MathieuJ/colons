'use strict';

angular.module('auth')
    .factory('AuthServerProvider', function loginService($http, localStorageService, $window, $ionicHistory) {
        return {
            login: function(credentials) {
            console.log(credentials);
                var data = 'j_username=' + encodeURIComponent(credentials.username) +
                    '&j_password=' + encodeURIComponent(credentials.password) +
                    '&remember-me=' + credentials.rememberMe + '&submit=Login';
                return $http.post('/api/authentication', data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (response) {
                    return response;
                });
            },
            logout: function() {
            console.log("logoout...");
                // logout from the server
                $http.post('/api/logout').success(function (response) {
                    console.log("logoout done");
                     $ionicHistory.clearCache();
                            $ionicHistory.clearHistory();
                    localStorageService.clearAll();
                    // to get a new csrf token call the api
                    $http.get('/api/account');
                    return response;
                });
            },
            getToken: function () {
                var token = localStorageService.get('token');
                return token;
            },
            hasValidToken: function () {
                var token = this.getToken();
                return !!token;
            }
        };
    });
