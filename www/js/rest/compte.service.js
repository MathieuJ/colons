'use strict';

angular.module('starter.services')
    .factory('Compte', function ($resource) {
        return $resource('/api/compte', {}, {

            addMonJeu : {
                method : 'POST',
                url : '/api/compte/jeux'
            },
            supprimeMonJeu : {
                method: 'POST',
                url : '/api/compte/mesjeux/:id'
            },
            getMesJeux : {
                method : 'GET',
                url : '/api/compte/jeux', isArray: true
            },
            editMonJeu : {
                method: 'PUT',
                url : '/api/compte/mesjeux/:id'
            },
             getMesAmis : {
                 method : 'GET',
                 url : '/api/compte/amis', isArray: true
             },
             ajouteAmi : {
                 method : 'POST',
                 url : '/api/compte/amis',
                 isArray : true
             }
        });
    });
