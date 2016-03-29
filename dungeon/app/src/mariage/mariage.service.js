(function(){
  'use strict';

  angular.module('mariage')
    .service('MariageService', ['Personne', 'localStorageService', MariageService]);

  function MariageService(Personne, localStorageService){
    var Mariage = null;

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
      console.log("save", Mariage);
      localStorageService.set('mariage', Mariage);
    }
    
    this.get = function() {
      console.log("mariage v2");
      
      if (!Mariage) {
        console.log("pas maraige, on charge");
        Mariage = localStorageService.get('mariage');
        if (!Mariage) {
          console.log("pas en stock, on init");
          this.init();  
        }
      }
      console.log("after : mariage", Mariage);
      return Mariage;
    }
  }
})();
