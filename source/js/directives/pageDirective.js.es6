angular.module('app').directive('bvrPage', [function() {
  return {
    restrict: "E",
    controller: function($scope) {
    },
    link: function(scope, element, attrs) {
      const parentContainer = element.parent('.page-container');
      attrs.enterTransition ? parentContainer.addClass(`${attrs.enterTransition}-enter`) : parentContainer.addClass('fade-enter');
      attrs.exitTransition ? parentContainer.addClass(`${attrs.exitTransition}-exit`) : parentContainer.addClass('fade-exit');

      const sideDragger = $('.side-dragger');
      attrs.drawer && attrs.drawer === 'false' ? sideDragger.addClass('disabled') : sideDragger.removeClass('disabled');
    }
  };
}]);