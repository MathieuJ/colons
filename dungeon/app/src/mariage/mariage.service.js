(function(){
  'use strict';

  angular.module('mariage')
    .service('MariageService', ['Personne', MariageService]);

  function MariageService(Personne){
    var Mariage = {
      'marie1' : new Personne(),
      'marie2' : new Personne(),
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
    return {
      init : function() {
        console.log("init recup de localstorage");
      },
      get : function() {
        return Mariage;
      }
    };
  }

})();
