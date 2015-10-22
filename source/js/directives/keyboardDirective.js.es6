angular.module('app').directive("detectKeyboard", [
  function() {
    return {
      restrict: "A",
      link: function($scope, $element, attrs) {
        var targetElement;
        targetElement = $('body');
        return $scope.$on('$viewContentLoaded', function() {
          $('input,textarea').on('focus', function() {
            return targetElement.addClass('keyboard-visible');
          });
          return $('input,textarea').on('blur', function() {
            return targetElement.removeClass('keyboard-visible');
          });
        });
      }
    };
  }
]);