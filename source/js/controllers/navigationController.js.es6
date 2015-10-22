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

    document.addEventListener('backbutton', function(e) {
      $scope.$apply(function() {
        self.backClicked();
      });
    });

    window.backInProgress = 0;
    self.backClicked = () => {
      if (self.backAction) {
        window.backInProgress++;
        $('body').addClass('back');
        self.backAction();    
      } else {
        if ($location.path() === '/home') { navigator.app.exitApp(); }
      }
    };
  }
}

angular.module('app').controller('navigationController', ['$scope', '$rootScope', '$timeout', '$location', Controller]);