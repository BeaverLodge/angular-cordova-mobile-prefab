angular.module('app').directive("detectOs", [
  function() {
    return {
      restrict: "A",
      link: function($scope, $element, attrs) {
        var isAndroid, isIOS, versionNumber;
        isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isIOS) {
          $element.addClass('ios');
          versionNumber = parseFloat(navigator.userAgent.match(/OS \d/)[0][3]);
          if (versionNumber >= 7) {
            $element.addClass('ios7');
          }
        }
        isAndroid = /Android/i.test(navigator.userAgent);
        if (isAndroid) {
          $element.addClass('android');
          versionNumber = parseFloat(navigator.userAgent.match(/Android (\d+(?:\.\d+)+)/)[1]);
          if (versionNumber < 4.4) {
            return $element.addClass('old-android');
          }
        }
      }
    };
  }
]);