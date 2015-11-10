angular.module('app').directive('bvrMenu', ['snapRemote', function(snapRemote) {
  return {
    restrict: "E",
    scope: {
      backAction: '='
    },
    templateUrl: 'partials/menu.html',
    controller: function($scope) {
      snapRemote.getSnapper().then(function (snapper) {
        const isClosed = function() {
          return snapper.state().state === 'closed';
        };

        const isOpen = function() {
          return !isClosed();
        };

        const openDrawer = function() {
          snapper.open('left');
        };

        const closeDrawer = function() {
          snapper.close('left');
        };

        $scope.hasBackAction = function() {
          return $scope.backAction !== null;
        };

        $scope.performAction = function() {
          if ($scope.hasBackAction()) {
            if (isOpen()) {
              closeDrawer();
            } else {
              $scope.backAction();
            }
          } else {
            if (isClosed()) {
              openDrawer();
            }
          }
        };

        // If we're at a "top-level" page with no back action, 
        // when we receive the Android back button, exit the app
        document.addEventListener('backbutton', function(e) {
          $scope.$apply(function() {
            if (isOpen()) {
              closeDrawer();
            } else {
              if ($scope.hasBackAction()) { 
                $scope.backAction();
              } else {
                navigator.app.exitApp(); 
              }
            }
          });
        }); 
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