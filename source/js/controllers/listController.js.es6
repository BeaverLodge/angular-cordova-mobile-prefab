class Controller {
  constructor($rootScope, transitionService, i18nService, entryService) {
    const self = this;

    $rootScope.$emit('navigationConfig', 
      {
        labelForTitle: i18nService.get('listTitle'),
        backAction: function() {
          transitionService.transitionTo('/home', 'slide-right', 'slide-right');
        }
      }
    );

    self.entries = [];
    entryService.all().then((entries) => self.entries = entries);

    self.go = (path) => {
      transitionService.transitionTo(path, 'slide-left', 'slide-left');
    };
  }
}

angular.module('app').controller('listController', ['$rootScope', 'transitionService', 'i18nService', 'entryService', Controller]);