angular.module('app').directive('sidebar', ['snapRemote', function(snapRemote) {
  return {
    restrict: "E",
    templateUrl: 'partials/sidebar.html',
    controller: function($location, transitionService) {
      const self = this;

      self.isActive = (path) => {
        return path === $location.path();
      };

      snapRemote.getSnapper().then(function (snapper) {
        self.go = (path) => {
          transitionService.transitionTo(path);
          snapper.close('left');
        };
      });
    },
    controllerAs: 'vm',
    bindToController: true
  };
}]);