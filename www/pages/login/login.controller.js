angular.module('starter.controllers')
.controller('loginCtrl', function($rootScope, $state, $timeout, Auth) {
  var vm = this;
  vm.errors = {};

  vm.rememberMe = true;
  //$timeout(function (){angular.element('[ng-model="username"]').focus();});
  vm.login = function (event) {
      console.log("login", event);
      event.preventDefault();
      console.log(vm.user, vm.username, vm.password);
      Auth.login({
          username: vm.username,
          password: vm.password,
          rememberMe: vm.rememberMe
      }).then(function () {
          vm.authenticationError = false;
          //if ($rootScope.previousStateName === 'register') {
              $state.go('tab.accueil');
          /*} else {
              $rootScope.back();
          }*/
      }, function() { console.log("error");}).catch(function () {
      console.log("error2");
          vm.authenticationError = true;
      });
  };

})
.controller('newAccountCtrl', function($rootScope, $state, $timeout, Auth) {
  var vm = this;
  vm.errors = {};

  vm.rememberMe = true;
  //$timeout(function (){angular.element('[ng-model="username"]').focus();});
  vm.create = function (event) {
      console.log("login", event);
      event.preventDefault();
      console.log(vm.user, vm.username, vm.password);
      Auth.createMobileAccount({
          login: vm.login,
          password: vm.password
      }).then(function () {
        console.log(" creation ok");
          vm.authenticationError = false;
          //if ($rootScope.previousStateName === 'register') {
              $state.go('tab.accueil');
          /*} else {
              $rootScope.back();
          }*/
      }, function(response) {
        console.log("creation error", response);
      }).catch(function (response) {
        console.log("catch");
            vm.success = null;
          if (response.status === 400 && response.data === 'login already in use') {
              vm.errorUserExists = 'ERROR';
          } else if (response.status === 400 && response.data === 'e-mail address already in use') {
              vm.errorEmailExists = 'ERROR';
          } else {
              vm.error = 'ERROR';
          }
          console.log("error2");
          vm.authenticationError = true;
      });
  };

})
;
