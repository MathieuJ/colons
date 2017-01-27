'use strict';

angular.module('starterApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('hex', {
                parent: 'site',
                url: '/hex',
                data: {
                    authorities: [],
                    pageTitle: 'Hex'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/hex/hex.html',
                        controller: 'HexController'
                    }
                },
                resolve: {
                }
            })
});
