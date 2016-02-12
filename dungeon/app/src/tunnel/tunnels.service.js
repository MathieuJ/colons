(function(){
  'use strict';

  angular.module('tunnels')
    .service('PartieService', ['Guy', PartieService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function PartieService(Guy){
    var Partie = {
      'mercenaires' : [],
      'mercenairesDispos' : [new Guy('Robert')]
    };

    // Promise-based API
    return {
      getPartie : function() {
        return Partie;
      },
      init : function() {

      },
      combat : function() {

      },
      avance : function() {

      },
      ameliore : function() {
        console.log("ameliore");
      }

    };
  }

})();
