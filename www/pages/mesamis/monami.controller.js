angular.module('starter.controllers')
  .controller('MonAmiCtrl', function(Jeu, $stateParams, $state, Ludotheque) {
    var vm = this;

    vm.jeu = $stateParams.jeu;
    vm.id = $stateParams.id;

    if (!vm.jeu) {
         console.log("recupere monjeu", vm.id);
            Ludotheque.getMonJeu(vm.id).then(function(res) {
                console.log("ok recupere", res);
                vm.jeu = res;
            });
        }

    console.log("mon jeu");

  });