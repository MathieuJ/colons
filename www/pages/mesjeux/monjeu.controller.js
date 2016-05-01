angular.module('starter.controllers')
    .controller('MonJeuCtrl', function(Jeu, $stateParams, $state, Ludotheque, $scope, $ionicPopup, $ionicModal) {
        var vm = this;

        vm.jeu = $stateParams.jeu;
        vm.id = $stateParams.id;

        Ludotheque.getMesAmis().then(function(res) {
            vm.amis = res;
            console.log("amis ", vm.amis);
        }, function(error) {
            console.log("error");
            vm.attente = false;
        });

        if (!vm.jeu) {
            console.log("recupere monjeu", vm.id);
            Ludotheque.getMonJeu(vm.id).then(function(res) {
                console.log("ok recupere", res);
                vm.jeu = res;
            });
        }

        console.log("mon jeu");

        vm.supprimeJeu = function() {
            console.log("supprime");
            Ludotheque.supprimeJeu(vm.id).then(function(res) {
                $state.go('tab.mesjeux');
            });
        }

        vm.showPopupEmprunt = function() {
            $scope.pret = {};
            $scope.amis = vm.amis;

            $scope.currentDate = new Date();
            $scope.datePickerCallback = function(val) {
                if (typeof(val) === 'undefined') {
                    console.log('Date not selected');
                } else {
                    console.log('Selected date is : ', val);
                }
            };
            var currentDate = new Date();
            var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 23);
            $scope.date = date;

            $scope.myFunction = function(date) {
                alert(date);
            };
            $scope.onezoneDatepicker = {
                date: date,
                mondayFirst: false,
                //months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
                //daysOfTheWeek: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sa"],
                startDate: new Date(1989, 1, 26),
                endDate: new Date(2024, 1, 26),
                disablePastDays: false,
                disableSwipe: false,
                disableWeekend: false,
                disableDates: [new Date(date.getFullYear(), date.getMonth(), 15), new Date(date.getFullYear(), date.getMonth(), 16), new Date(date.getFullYear(), date.getMonth(), 17)],
                showDatepicker: false,
                showTodayButton: true,
                calendarMode: false,
                hideCancelButton: false,
                hideSetButton: false,
                //callback: $scope.myFunction
            };

            $scope.showDatepicker = function() {
                $scope.onezoneDatepicker.showDatepicker = true;
            };
            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                templateUrl: 'pages/mesjeux/popup-pret.html',
                title: 'Sélectionnez l\'ami et la date de retour',
                subTitle: 'La date de retour sert à se souvenir',
                scope: $scope,
                buttons: [{
                    text: 'Annuler'
                }, {
                    text: '<b>Valider</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        $scope.pret.selectedDate = $scope.onezoneDatepicker.date;
                        console.log($scope.pret);
                        if (!$scope.pret.selectedAmi || !$scope.pret.selectedDate) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            return $scope.pret;
                        }
                    }
                }]
            });

            myPopup.then(function(res) {
                console.log('Ajouté', res);
                Ludotheque.preteJeu(res.selectedAmi, res.selectedDate);
                vm.jeu.prete = true;
            });
        };


    });