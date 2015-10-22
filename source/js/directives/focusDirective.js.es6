angular.module('app').directive("focusWhen", function() {
  return {
    restrict: "A",
    scope: {
      focusValue: "=focusWhen"
    },
    link: function($scope, $element, attrs) {
      $scope.$watch("focusValue", function(currentValue, previousValue) {
        if (currentValue === true && !previousValue) {
          $element[0].focus();
        } else {
          if (currentValue === false && previousValue) {
            $element[0].blur();
          }
        }
      });
    }
  };
});