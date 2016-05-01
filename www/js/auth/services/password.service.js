'use strict';

angular.module('auth')
    .factory('Password', function ($resource) {
        return $resource('/api/account/change_password', {}, {
        });
    });

angular.module('auth')
    .factory('PasswordResetInit', function ($resource) {
        return $resource('/api/account/reset_password/init', {}, {
        })
    });

angular.module('auth')
    .factory('PasswordResetFinish', function ($resource) {
        return $resource('/api/account/reset_password/finish', {}, {
        })
    });
