angular.module('app').directive('bvrPage', [function() {
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