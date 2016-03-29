(function(){
  'use strict';

  angular.module('mariage')
    .service('MariageService', ['Personne', 'localStorageService', MariageService]);

  function MariageService(Personne, localStorageService){
    var Mariage ;

    // Promise-based API
    this.init = function() {
      Mariage = {
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
      }
    };
      
    this.addInvite = function(personne) {
      Mariage.invites.push(personne);
    };
    
    this.save = function() {
      localStorageService.set('mariage', Mariage);
    }
    
    this.get = function() {
      if (!!Mariage) {
        this.init();
      } else {
        Mariage = localStorageService.get('mariage');
      }
      return Mariage;
    }
  }
})();
