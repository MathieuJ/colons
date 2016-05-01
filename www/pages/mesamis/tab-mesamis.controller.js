angular.module('starter.controllers')
  .controller('MesAmisCtrl', function(Jeu, $stateParams, $scope, $state, Ludotheque, $ionicPopup) {
    var vm = this;
    vm.nbj = 3;
    vm.ext = false;
    console.log("recupere mes jeux");

    vm.showAddAmi = function() {
        vm.showAddAmi = true;

    }

    Ludotheque.getMesAmis().then(function(res) {
        console.log(res);
        vm.mesAmis = res;
    }, function(error) {
        console.log("error");
        vm.attente = false;
    });
    vm.selectAmi = function(jeu) {
      console.log("go mon jeu ", jeu);
      $state.go('tab.monami', {
        'id': jeu.id,
        'jeu': jeu
      });
    }
    vm.recherche = function() {
        vm.attente = true;
        Ludotheque.ajouteAmi(vm.requete).then(function(res) {
            console.log("ok", res);
            vm.msgError = "";
            vm.mesAmis = res;
            vm.attente = false;
        }, function(error) {
            console.log("nok", error);
            if (error.data.response === 'none') {
                vm.msgError="Personne de ce nom"
            }
            console.log("error", error.data.response);

             vm.attente = false;
         });
    }
  });