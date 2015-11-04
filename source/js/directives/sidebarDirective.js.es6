angular.module('app').directive('sidebar', ['snapRemote', function(snapRemote) {
  return {
    restrict: "E",
    templateUrl: 'partials/sidebar.html',
    controller: function($location) {
      const self = this;

      self.isActive = (path) => {
        return path === $location.path();
      };

      snapRemote.getSnapper().then(function (snapper) {
        self.go = (path) => {
          $location.path(path);
          snapper.close('left');
        };
      });
    },
    controllerAs: 'vm',
    bindToController: true
  };
}]);