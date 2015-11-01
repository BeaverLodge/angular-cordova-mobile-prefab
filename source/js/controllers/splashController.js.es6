class Controller {
  constructor($rootScope, $location, $timeout) {
    $rootScope.$emit('navigationConfig', 
      {
        navigationAvailable: false
      }
    );

    Platform.isReady(function() {
      $timeout(function() {
        $location.path('/home');
      }, 0);
    });
  }
}

angular.module('app').controller('splashController', ['$rootScope', '$location', '$timeout', Controller]);