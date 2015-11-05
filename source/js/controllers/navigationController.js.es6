class Controller {
  constructor($scope, $rootScope, $timeout, $location) {
    const self = this;
    self.backAction = null;
    self.navigationAvailable = false;

    $rootScope.$on('navigationConfig', function(e, config) {
      $timeout(function() {
        if (config.labelForTitle !== undefined) { self.labelForTitle = config.labelForTitle; }
        if (config.backAction !== undefined) { self.backAction = config.backAction; }
        if (config.navigationAvailable !== undefined) {
          self.navigationAvailable = config.navigationAvailable; 
        } else { 
          self.navigationAvailable = true;
        }
      });
    });
  }
}

angular.module('app').controller('navigationController', ['$scope', '$rootScope', '$timeout', '$location', Controller]);