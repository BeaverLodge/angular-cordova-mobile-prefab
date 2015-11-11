angular.module('app').directive('page', [function() {
  return {
    restrict: "E",
    controller: function($scope) {
    },
    link: function(scope, element, attrs) {
      const sideDragger = $('.side-dragger');
      attrs.drawer && attrs.drawer === 'false' ? sideDragger.addClass('disabled') : sideDragger.removeClass('disabled');
    }
  };
}]);