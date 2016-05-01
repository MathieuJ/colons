angular.module('steeve.controllers')


  .controller('bggJeuxCtrl', function(Jeu, $stateParams, $state) {
    console.log("bggjeux");
    var vm = this;
    vm.requete = $stateParams.requete;
    vm.listeIdsJeuxComplete = [];
    vm.nbcharges = 0;

    if (!vm.requete) {
      $state.go('^.recherche');
    }

    vm.attente = true;
    Jeu.searchBGG({
      "requete": vm.requete
    }, function(res) {
      if (res.length === 0) {
        console.log("erreur ", res);
        vm.attente = false;
        vm.errorMsg = "Aucun résultat";
        return;
      }
      angular.forEach(res, function(jeu) {
        vm.listeIdsJeuxComplete.push(jeu.bggId);
      });

      Jeu.getBGGDetails({
        ids: vm.listeIdsJeuxComplete
      }, function(res2) {
        vm.jeux = res2;
        console.log(vm.jeux);
        vm.attente = false;
      });

    }, function(res) {
      console.log("erreur ", res);
      vm.attente = false;
      vm.errorMsg = "Erreur : " + res;
    });
    vm.selectJeu = function(jeu) {
      console.log("select", jeu);
      $state.go("^.bggJeu", {
        jeu: jeu
      });
    };
    vm.loadMore = function() {
        console.log("load more");

      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    vm.moreDataCanBeLoaded = function() {
        console.log("moredata");
        return true;
    };
  })
;