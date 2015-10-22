angular.module('app').directive("detectBack", [
  '$animate', function($animate) {
    return {
      restrict: "A",
      link: function($scope, $element, attrs) {
        return $element.on('$animate:close', function() {
          if (window.backInProgress > 0) {
            window.backInProgress--;
          }
          if (window.backInProgress === 0) {
            return $('body').removeClass('back');
          }
        });
      }
    };
  }
]);