(function(){
  'use strict';

  angular.module('tunnels')
    .factory('Guy', [Guy]);

  function Guy(){
    var Guy = function(nom, force, vie, endu, cout) {
      this.nom = nom;
      this.force = force;
      this.vie = vie;
      this.endu = endu;
    };
    Guy.prototype = {
      applyBoost : function(boost) {
        if (boost === 'force1') {
          this.force += 1;
        } else if (boost === 'endu1') {
          this.endu += 1;
        } else if (boost === 'autosoin') {
          this.autosoin = 1;
        }
      },
      faitDegats : function(p) {
        this.degats += p;
      }
    };
    return Guy;
  }

})();
