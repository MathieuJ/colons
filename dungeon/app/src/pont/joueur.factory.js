(function(){
  'use strict';

  angular.module('pont')
    .factory('Joueur', ['Bot', Joueur]);

  function Joueur(Bot){
    var Joueur = function(nom, or) {
      this.nom = nom;
      this.or = or;
      this.queue = [];
      this.boosts = [];
      this.avancee = 10;
    };
    Joueur.prototype = {
      achete : function(boost) {
        this.boosts.add(boost);
        this.or -= boost.prix;
      },
      init : function() {
        var i;

        for (i = 0; i < 20; i++) {
          this.boosts.push(undefined);
        }
        for (i = 0; i < 10; i++) {
          this.queue.push(undefined);
        }
        for (i = 0; i < 10; i++) {
          this.queue.push(new Bot(1, 3));
        }
      }
    };
    return Joueur;
  }

})();
