(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('tunnels', []);

    angular.module('tunnels').state('tunnel', {
              url: '/tunnel',
              templateUrl: 'src/tunnel/tunnels.html',
              controller: 'TunnelsController',
              controllerAs : 'dc'
            })
})();
