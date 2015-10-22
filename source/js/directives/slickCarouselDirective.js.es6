angular.module('app').directive("slickCarousel", function() {
  return {
    restrict: "A",
    link: function($scope, $element, attrs) {
      $scope.vm.content = $element.slick({
        arrows: false,
        infinite: false,
        onAfterChange: function(state) {
          return $scope.$apply(function() {
            $scope.vm.indexChanged(state.currentSlide);
          });
        }
      });
      setTimeout(function() {
        var newHeight;
        newHeight = $(window).height() - $('.navigation').height() - $('.tab-headers').height();
        $element.find('.tab-page').height(newHeight);
      });
    }
  };
});