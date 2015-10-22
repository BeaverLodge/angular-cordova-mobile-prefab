//= require configuration
//= require platform
//= require analytics
//= require app
//= require routes
//= require_tree ./controllers
//= require_tree ./services
//= require_tree ./directives

$(function() {
  return angular.bootstrap(document, ['app']);
});