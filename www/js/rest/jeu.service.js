'use strict';

angular.module('starter.services')
    .factory('Jeu', function ($resource ) {
        return $resource('/api/jeus/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' },
            'searchBGG' : {
                isArray : true,
                url : '/api/bggjeux'
            },
            'getBGG' : {
                url : '/api/bggjeux/:id'
            },
            'getBGGDetails' : {
                isArray : true,
                url : '/api/bggjeux-details'
            },
            'getCollection' : {
                isArray : true,
                url : '/api/collection'
            }

        });
    });
