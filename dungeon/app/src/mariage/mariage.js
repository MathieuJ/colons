(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('mariage', ['ui.router'])

    .config(function($stateProvider){
    $stateProvider
      .state('mariage', {
        abstract: true,
        url: '/mariage',
        params: {
          mariageId: null
        },
        templateUrl: 'src/mariage/mariage.html',
        controller: 'MariageController'
      })
      .state('mariage.noms', {
        parent: 'mariage',
        url: '/noms',
        templateUrl: 'src/mariage/views/noms.html',
        controller: 'SaisieNomsController',
        controllerAs : 'vm'
      })
      .state('mariage.evenements', {
        parent: 'mariage',
        url: '/evenements',
        templateUrl: 'src/mariage/views/evenements.html',
        controller: 'SaisieEvenementsController',
        controllerAs : 'vm'
      })
      .state('mariage.config', {
        parent: 'mariage',
        url: '/config',
        templateUrl: 'src/mariage/views/config.html',
        controller: 'SaisieConfigController',
        controllerAs : 'vm'
      })
      .state('mariage.resume', {
        parent: 'mariage',
        url: '/resume',
        templateUrl: 'src/mariage/views/resume.html',
        controller: 'ResumeController',
        controllerAs : 'vm'
      })
      .state('mariage.budget', {
        parent: 'mariage',
        url: '/budget',
        templateUrl: 'src/mariage/views/budget.html',
        controller: 'BudgetController',
        controllerAs : 'vm'
      })
      .state('mariage.invites', {
        parent: 'mariage',
        url: '/invites',
        templateUrl: 'src/mariage/views/invites.html',
        controller: 'InvitesController',
        controllerAs : 'vm'
      })
  });
})();
