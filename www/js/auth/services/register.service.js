'use strict';

angular.module('auth')
    .factory('Register', function ($resource) {
        return $resource('/api/register', {}, {
            'saveMobile': { method: 'POST', url : '/api/compte/init', isArray: false}
        });
    });


