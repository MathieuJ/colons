angular.module('starter.controllers')
  .controller('MesJeuxCtrl', function(Jeu, $stateParams, $scope, $state, Ludotheque, JoueurJeu, $ionicPopup) {
    var vm = this;
    //vm.nbj = 3;
    vm.ext = false;
    console.log("recupere mes jeux");

    Ludotheque.getMesJeux().then(function(res) {
      var listeIdsJeuxComplete = [];
      var idVersJeu = {};
      vm.mesJeux = res;
      console.log("ok res", res);
      /*angular.forEach(res, function(jeu) {
        listeIdsJeuxComplete.push(jeu.idBgg);
        idVersJeu[jeu.idBgg] = jeu;
      });
        console.log("ok res", res, idVersJeu);
        vm.jeux = res;
        if (res.length === 0) {
            vm.message = "Désolé, rien trouvé";
            vm.attente = false;
            return;
        }
        Ludotheque.getDetails(listeIdsJeuxComplete).then(function(res) {
            angular.forEach(res, function(fiche) {
                idVersJeu[jeu.idBgg].fiche = fiche;
            });
            console.log("on a les details", idVersJeu);
            vm.mesJeux = idVersJeu;
            vm.attente = false;
        });*/
    }, function(error) {
        console.log("error");
        vm.attente = false;
    });
    vm.selectJeu = function(jeu) {
      console.log("go mon jeu ", jeu);
      $state.go('tab.monjeu', {
        'id': jeu.id,
        'jeu': jeu
      });
    }
    var myLoginBGGPopup = function() {
      return $ionicPopup.show({
        template: '<input type="idbgg" ng-model="nom">{{nom}}',
        title: 'Votre id bgg',
        subTitle: 'Allez mettez le',
        scope: $scope,
        buttons: [{
          text: 'Cancel'
        }, {
          text: '<b>Go</b>',
          type: 'button-positive',
          onTap: function(e) {
            console.log($scope, $scope.nom);
            if (!$scope.nom) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.nom;
            }
          }
        }]
      })
    };
    vm.askImport = function() {
        $scope.nom = 'bol2ry';
      myLoginBGGPopup().then(function(nom) {
        Jeu.getCollection({nom : nom}, function(collection) {
            //store.addCollection(collection);
        });
      });
    }
    vm.filtreJeux = function(jeu, i) {
        //if (i<10) console.log(jeu.jeu.nom, jeu.jeu.jeutype, vm.ext, vm.ext || jeu.jeu.jeutype === 'Boardgame');
        return (vm.ext || jeu.jeu.jeutype === 'Boardgame') && (!vm.nbj || jeu.jeu.nbJoueursMin <= vm.nbj && jeu.jeu.nbJoueursMax >= vm.nbj);
    }
  });