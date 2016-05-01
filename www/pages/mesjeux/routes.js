angular.module('starter.routes')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.mesjeux', {
          url: '/mesjeux',
          views: {
            'tabJeux': {
              templateUrl: 'pages/mesjeux/tab-mesjeux.html',
              controller: 'MesJeuxCtrl',
              controllerAs: 'vm'
            }
          }
        })
    .state('tab.monjeu', {
              url: '/monjeu/:id',
              params : { 'jeu' : null},
              views: {
                'tabJeux': {
                  templateUrl: 'pages/mesjeux/monjeu.html',
                  controller: 'MonJeuCtrl',
                  controllerAs: 'vm'
                }
              }
            });
});