class Controller {
  constructor($rootScope, $location, i18nService, entryService) {
    const self = this;

    $rootScope.$emit('navigationConfig', 
      {
        labelForTitle: i18nService.get('listTitle'),
        backAction: function() {
          $location.path('/home');
        }
      }
    );

    self.entries = [];
    entryService.all().then((entries) => self.entries = entries);
  }
}

angular.module('app').controller('listController', ['$rootScope', '$location', 'i18nService', 'entryService', Controller]);