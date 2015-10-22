const app = angular.module('app', ['ngRoute', 'ngTouch', 'ngAnimate', 'ngSanitize', 'configuration', 'angulartics', 'angulartics.google.analytics']);

app.config([
  '$compileProvider', function($compileProvider) {
    return $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile):|data:image\//);
  }
]);

marked.setOptions({
  breaks: true,
  sanitize: true
});