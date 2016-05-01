angular.module('starter.controllers')
  .controller('AccueilCtrl', function(Auth, $state, Principal, Ludotheque) {
    var vm = this;
    vm.identity = Principal.getIdentity();
    console.log(vm.identity);
    Ludotheque.getMesJeux().then(function(res) {
        vm.mesJeux = res;
    });
    Ludotheque.getMesAmis().then(function(res) {
        vm.mesAmis = res;
    });

    vm.logout = function() {
      Auth.logout();
      $state.go('login');
    }
  });