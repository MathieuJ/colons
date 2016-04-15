(function() {

  angular
    .module('tunnels')
    .controller('TunnelsController', [
      'partieService', '$timeout',
      TunnelsController
    ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function TunnelsController(PartieService, $timeout) {
    var vm = this;

    vm.users = [];
    
    //PartieService.init();
    
  vm.map=[];
  var taille=32;
  for (var i =0; i < taille; i++)   {
   var ligne = [];
   for (var j =0;  j < taille; j++){
     ligne.push({i: i, j: j});
 }
   vm.map.push(ligne);
  }
  
  function get(x, y){
    return vm.map[x][y];
  }
  vm.selectedCase;
  vm.selectedUnite;
  vm.select = function(x, y){
    var macase=get(x, y);
    vm.selectedCase=macase;
    if (vm.selectedUnite){
      vm.selectedUnite = false;
    } else {
       var unite = null; //getUnite(x, y);
       if (unite){
         vm.selectedUnite= unite;
         //vm.destinations=calculeChemins();
       }
    }
  }

})();
