(function(){
  'use strict';

  angular.module('mariage')
    .factory('Personne', [Personne]);

  function Personne(){
    var Personne = function(nom, cote, sexe) {
      this.nom = nom;
      this.cote = cote;
      this.sexe = sexe;
    };
    Personne.prototype = {
      isCoteMarie : function(cote) {
        return this.cote === cote;
      }
    };
    return Personne;
  }

})();
