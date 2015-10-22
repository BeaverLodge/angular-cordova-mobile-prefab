angular.module('app').directive("scaleFit", [
  '$timeout', function($timeout) {
    return {
      restrict: "A",
      link: function($scope, $element, attrs) {
        var maxWidth;
        maxWidth = $element.innerWidth();
        if (attrs.scaleFit) {
          maxWidth = attrs.scaleFit;
        }
        return $timeout(function() {
          var childSpan, difference, scale, spanWidth;
          $element.css('white-space', 'nowrap');
          childSpan = $element.find('span');
          spanWidth = childSpan.innerWidth();
          if (spanWidth > maxWidth) {
            scale = maxWidth / spanWidth;
            difference = (spanWidth - spanWidth * scale) / 2;
            childSpan.css('display', 'inline-block');
            childSpan.css('transform-origin', 'left');
            childSpan.css('transform', "scale(" + scale + ")");
            childSpan.innerWidth(maxWidth + "px");
          }
        }, 100);
      }
    };
  }
]);