angular.module('steeve.routes')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tabsController.recherche', {
      url: '/recherche',
      views: {
        'tab8': {
          templateUrl: 'pages/recherche/recherche.html',
          controller: 'rechercheCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('tabsController.bggJeux', {
            url: '/bggJeux',
            params : { 'requete' : null },
            views: {
              'tab2': {
                templateUrl: 'pages/recherche/jeux.html',
                controller: 'bggJeuxCtrl',
                controllerAs: 'vm'
              }
            }
          })
    .state('tabsController.bggJeu', {
      url: '/bggJeu',
      params : { 'jeu' : null },
      views: {
        'tab2': {
          templateUrl: 'pages/recherche/jeu.html',
          controller: 'bggJeuCtrl',
          controllerAs: 'vm'
        }
      }
    })
    ;
});