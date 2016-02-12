(function(){
  'use strict';

  angular.module('pont')
    .factory('Boost', [Boost]);

  function Boost(){
    var Boost = function(nom, effet, prix, parite) {
      this.nom = nom;
      this.effet = effet;
      this.parite = parite;
      this.prix = prix;
    };
    Boost.prototype = {
      faitDegats : function(p) {
        this.degats += p;
      }
    };
    return Boost;
  }

})();
