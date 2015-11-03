angular.module('app').directive('menuIcon', ['snapRemote', function(snapRemote) {
  return {
    restrict: "E",
    scope: {
      showArrow: '=showArrow'
    },
    templateUrl: 'partials/menu_icon.html',
    link: function(scope, element, attrs) {
      const menuIcon = element.find('.menu-icon');

      snapRemote.getSnapper().then(function(snapper) {
        const canToggle = function() {
          return !scope.showArrow;
        };

        const isClosed = function() {
          return snapper.state().state === 'closed';
        };

        snapper.on('drag', function() {
          snapper.state().info.towards === 'left' ? menuIcon.removeClass('cross') : menuIcon.addClass('cross');
        });
        snapper.on('animated', function() {
          isClosed() ? menuIcon.removeClass('cross') : menuIcon.addClass('cross');
        });

        menuIcon.on('click', function() {
          if (canToggle()) {
            isClosed() ? snapper.open('left') : snapper.close('left');
          }
        });
      });
    }
  };
}]);