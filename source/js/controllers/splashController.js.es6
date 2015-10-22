class Controller {
  constructor($rootScope, $location) {
    $rootScope.$emit('navigationConfig', 
      {
        navigationAvailable: false,
        searchAvailable: false
      }
    );

    Platform.isReady(function() {
      $location.path('/home');
    });
  }
}

angular.module('app').controller('splashController', ['$rootScope', '$location', Controller]);