(function(){
  'use strict';

  angular.module('mariage')
    .service('MariageService', ['Personne', MariageService]);

  function MariageService(Personne){
    var Mariage = {
      'marie1' : new Personne('Marié', 1, 'M'),
      'marie2' : new Personne('Mariée', 2, 'M'),
      invites : [],
      eglise : { actif : false },
      mairie : { actif : false },
      enterrementMarie1 : { actif : false },
      enterrementMarie2 : { actif : false },
      soiree : { actif : false },
      vinHonneur : { actif : false },
      lendemain : { actif : false }
    };

    // Promise-based API
    this.init = function() {
      console.log("init recup de localstorage");
    };
      
    this.addInvite : function(personne) {
      Mariage.invites.push(personne);
    };
  }
})();
