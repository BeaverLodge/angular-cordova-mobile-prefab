angular.module('app').directive('sideDragger', [function(snapRemote) {
  return {
    restrict: "E",
    templateUrl: 'partials/side_dragger.html'
  };
}]);