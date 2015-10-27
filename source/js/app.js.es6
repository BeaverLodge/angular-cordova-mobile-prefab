const app = angular.module('app', ['ngRoute', 'ngTouch', 'ngAnimate', 'ngSanitize', 'configuration', 'angulartics', 'angulartics.google.analytics', 'snap']);

app.config([
  '$compileProvider', function($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile):|data:image\//);
  }
]);

app.config([
  'snapRemoteProvider', function(snapRemoteProvider) {
    snapRemoteProvider.globalOptions.disable = 'right';
  }
]);