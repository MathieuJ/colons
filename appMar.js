var app = angular.module('appMar', []);

app.controller('MainCtrl', function($scope, Colon) {
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
    this.marie1 = 
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

