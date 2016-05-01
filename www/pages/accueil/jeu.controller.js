angular.module('starter.controllers')
  .controller('JeuCtrl', function(Jeu, $stateParams, $state, Ludotheque) {
  var vm = this;
    vm.jeu = $stateParams.jeu ;
    vm.idbgg = $stateParams.idbgg;
    vm.amoi = false;
    console.log(vm.idbgg, vm.jeu);
    if (!vm.jeu) {
     console.log("recupere", vm.idbgg);
        Jeu.get({ id : vm.idbgg} , function(res) {
            console.log("ok recupere", res);
            vm.jeu = res;
        });
    }

    vm.ajoute = function() {
        //var a = Ludotheque.addJeu(vm.jeu, function(a) { console.log("bok ok"); });
        //console.log(a);
        Ludotheque.addJeu(vm.jeu).$promise.then(function(result) {
            vm.jeu=result.jeu;
            vm.message = "Jeu ajouté";
        });
    }

  });