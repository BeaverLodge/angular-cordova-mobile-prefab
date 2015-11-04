angular.module('app').directive('menuIcon', ['snapRemote', function(snapRemote) {
  return {
    restrict: "E",
    scope: {
      backAction: '='
    },
    templateUrl: 'partials/menu_icon.html',
    controller: function($scope) {
      snapRemote.getSnapper().then(function (snapper) {
        const isClosed = function() {
          return snapper.state().state === 'closed';
        };

        $scope.hasBackAction = function() {
          return $scope.backAction !== null;
        }

        $scope.performAction = function() {
          if ($scope.hasBackAction()) {
            $scope.backAction();
          } else {
            if (isClosed()) {
              snapper.open('left');
            }
          }
        }
      });
    },
    link: function(scope, element, attrs) {
      const menuIcon = element.find('.menu-icon');

      snapRemote.getSnapper().then(function(snapper) {
        const isClosed = function() {
          return snapper.state().state === 'closed';
        };

        snapper.on('drag', function() {
          snapper.state().info.towards === 'left' ? menuIcon.removeClass('cross') : menuIcon.addClass('cross');
        });
        
        snapper.on('animated', function() {
          isClosed() ? menuIcon.removeClass('cross') : menuIcon.addClass('cross');
        });
      });
    }
  };
}]);