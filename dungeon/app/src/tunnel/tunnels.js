(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('tunnels', []);


  var map=[];
  var taille=32;
  for (var i =0; i < taille; i++)   {
   var ligne = [];
   for (var j =0;  j < taille; j++){
     ligne.push({i: i, j: j});
 }
   map.push(ligne);
  }
  
  function get(x, y){
    return map[x][y];
  }
  vm.selectedCase;
  vm.selectedUnite;
  vm.select = function(x, y){
    var macase=get(x, y);
    vm.selectedCase=macase;
    if (vm.selectedUnite){
      vm.selectedUnite = false;
    } else {
       var unite = getUnite(x, y);
       If (unite){
         Vm.selectedUnite= unite;
         Vm.destinations=CalculeChemins();
       }
    }
  }
})();
