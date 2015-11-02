const app = angular.module('app');

app.config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/pages/splash.html',
      controller: 'splashController as vm'
    });
    $routeProvider.when('/home', {
      templateUrl: 'partials/pages/home.html',
      controller: 'homeController as vm'
    });
    $routeProvider.when('/list', {
      templateUrl: 'partials/pages/list.html',
      controller: 'listController as vm'
    });
    $routeProvider.when('/entries/:entryId', {
      templateUrl: 'partials/pages/entry.html',
      controller: 'entryController as vm'
    });
    return $routeProvider.when('/tabs', {
      templateUrl: 'partials/pages/tabs.html',
      controller: 'tabsController as vm'
    });
  }
]);