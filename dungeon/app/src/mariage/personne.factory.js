(function(){
  'use strict';

  angular.module('mariage')
    .factory('Personne', [Personne]);

  function Personne(){
    var Personne = function(nom, cote, sexe) {
      this.nom = nom;
      this.cote = cote === 1 ? 1 : 2;
      this.sexe = sexe === 'M' ? 'M' : 'F';
    };
    Personne.prototype = {
      isCoteMarie : function(cote) {
        return this.cote === cote;
      }
    };
    return Personne;
  }

})();
