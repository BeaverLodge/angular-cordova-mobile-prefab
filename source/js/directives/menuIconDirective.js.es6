angular.module('app').directive('menuIcon', ['snapRemote', function(snapRemote) {
  return {
    restrict: "E",
    scope: {
      showArrow: '=showArrow'
    },
    templateUrl: 'partials/icon.html',
    link: function(scope, element, attrs) {
      const menuIcon = element.find('.icon');
      snapRemote.getSnapper().then(function(snapper) {
        snapper.on('animated', function() {
          snapper.state().state === 'closed' ? menuIcon.removeClass('cross') : menuIcon.addClass('cross');
        });
      });
    }
  };
}]);