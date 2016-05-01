angular.module('starter.routes')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.mesamis', {
          url: '/mesamis',
          views: {
            'tabAmis': {
              templateUrl: 'pages/mesamis/tab-mesamis.html',
              controller: 'MesAmisCtrl',
              controllerAs: 'vm'
            }
          }
        })
    .state('tab.monami', {
              url: '/monami/:id',
              params : { 'ami' : null},
              views: {
                'tabAmis': {
                  templateUrl: 'pages/mesamis/monami.html',
                  controller: 'MonAmiCtrl',
                  controllerAs: 'vm'
                }
              }
            });
});