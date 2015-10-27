class Controller {
  constructor($rootScope, i18nService, entryService, snapRemote) {
    const self = this;

    $rootScope.$emit('navigationConfig', 
      {
        labelForTitle: i18nService.get('homeTitle'),
        backAction: null
      }
    );

    self.labelForList = i18nService.get('homeList');
    self.labelForTabs = i18nService.get('homeTabs');
    self.labelForData = i18nService.get('homeData');

    self.loadData = function() {
      ['','','','','','','','','','',''].forEach((i,idx) => {
        entryService.save({
          id: idx+1,
          name: `Donkey ${idx+1}`,
          image: 'http://vrf.wpengine.netdna-cdn.com/wp-content/uploads/2014/03/donkey101.jpeg',
          description: '<p><strong>Monkeys</strong> are amongst</p><p>US.</p>'
        });
      });
    };
  }
}

angular.module('app').controller('homeController', ['$rootScope', 'i18nService', 'entryService', 'snapRemote', Controller]);