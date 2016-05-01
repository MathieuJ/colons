angular.module('starter.controllers')
  .controller('RechercheCtrl', function(Jeu, $state, Ludotheque) {
    var vm = this;
    console.log(vm.requete);
    vm.recherche = function() {

      if (!vm.requete) {
        return;
      }
        vm.message = "";
        vm.attente = true;
        Ludotheque.chercheNomsIds(vm.requete).then(function(res) {
          var listeIdsJeuxComplete = [];
          var idVersNom = {};
          angular.forEach(res, function(jeu) {
            listeIdsJeuxComplete.push(jeu.id);
            idVersNom[jeu.id] = jeu.name.value;
          });
            console.log("ok res", res, idVersNom);
            vm.jeux = res;
            if (res.length === 0) {
                vm.message = "Désolé, rien trouvé";
                vm.attente = false;
                return;
            }
            Ludotheque.getDetails(listeIdsJeuxComplete).then(function(res) {
                angular.forEach(res, function(jeu) {
                    if (idVersNom[jeu.idBgg] !== jeu.nom) {
                        jeu.nomTrouve = idVersNom[jeu.idBgg];
                    }
                });
                console.log("on a les details", res);
                vm.jeux = res;
                vm.attente = false;
            });
        }, function(error) {
            console.log("error");
            vm.attente = false;
        });

    }

    vm.selectJeu = function(jeu) {
        $state.go('tab.jeu', {'idbgg' : jeu.id, 'jeu' : jeu});
    }
  });