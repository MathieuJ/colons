'use strict';

angular.module('starter.services')
    .factory('Joueur', function ($resource) {
        return $resource('/api/joueurs/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET', isArray: true
            },
            'update': { method:'PUT' },
            'ajouteJeu' : {
                url : '/api/account/jeux',
                method : 'POST'
            }
        });
    });
