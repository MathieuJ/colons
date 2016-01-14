var app = angular.module('appMar', ['ui-router'])
;

app
  .config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/start");
  $stateProvider
    .state('start', {
      url: "/start",
      templateUrl: "partials/start.html"
    })
  })
  
.controller('MainCtrl', function($scope, Colon) {
  $scope.name = 'World';
  $scope.mariage = new Mariage();
  
})
.factory('Mariage', function() {
  var Mariage = function() {
    this.dateCreation = new Date();
    this.budget = false;
    this.mariageReligieux = true;
    this.mariageCivil = true;
    this.enterrementMarie1 = false;
    this.enterrementMarie2 = false;
    this.soiree = false;
  };
  return Mariage;
})
 .factory('Personne', function() {
  var Personne = function(nom, mail) {
    this.nom = nom;
    this.mail = mail;
  };
  
  return Personne;
})
;

