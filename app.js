var app = angular.module('colons', []);

app.controller('MainCtrl', function($scope, Colon) {
  $scope.name = 'World';
  $scope.c1 = new Colon("robert", 3);
  $scope.c2 = new Colon("roberta", 5);
});

app.factory('BatimentProto', function() {
  var BatimentProto = function(nom, type, materiaux, place, durabilite, etancheite, isolation, confort, beaute, autre) {
    this.nom = nom;
    this.materiaux = materiaux;
    this.durabilite = durabilite;
    this.etancheite = etancheite;
    this.isolation = isolation;
    this.confort = confort;
    this.place = place;
    this.type = type;
    this.autre = autre;
  };
  return BatimentProto;
})
 .factory('Colon', function() {
  var Colon = function(nom, age) {
    this.nom = nom;
    this.age = age;
  };
  Colon.prototype.getAge = function(date) {
    return 3;
  };
  return Colon;
})
;


