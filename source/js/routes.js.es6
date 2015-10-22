const app = angular.module('app');

app.config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/splash.html',
      controller: 'splashController as vm'
    });
    $routeProvider.when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'homeController as vm'
    });
    $routeProvider.when('/list', {
      templateUrl: 'partials/list.html',
      controller: 'listController as vm'
    });
    $routeProvider.when('/entries/:entryId', {
      templateUrl: 'partials/entry.html',
      controller: 'entryController as vm'
    });
    return $routeProvider.when('/tabs', {
      templateUrl: 'partials/tabs.html',
      controller: 'tabsController as vm'
    });
  }
]);