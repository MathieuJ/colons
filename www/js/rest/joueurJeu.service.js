'use strict';

angular.module('starter.services')
    .factory('JoueurJeu', function ($resource) {
        return $resource('/api/joueurJeus/:id', {}, {
             'query': { method: 'GET', isArray: true},
             'get': {
                 method: 'GET',
                 transformResponse: function (data) {
                     data = angular.fromJson(data);
                     return data;
                 }
             },
             'update': {
                 method: 'PUT',
                 transformRequest: function (data) {
                     return angular.toJson(data);
                 }
             },
             'save': {
                 method: 'POST',
                 transformRequest: function (data) {
                     return angular.toJson(data);
                 }
             },
             'supprime' : {
                method: 'DELETE'
             },
            addMonJeu : {
                method : 'POST',
                url : '/api/compte/jeux'
            },
            getMesJeux : {
                method : 'GET',
                url : '/api/compte/jeux', isArray: true
            },
            editMonJeu : {
                method: 'PUT',
                url : '/api/compte/mesjeux/:id'
            }
        });
    });
