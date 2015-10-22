class Controller {
  constructor($rootScope, $location, i18nService) {
    const self = this;

    $rootScope.$emit('navigationConfig', 
      {
        labelForTitle: i18nService.get('tabsTitle'),
        backAction: function() {
          $location.path('/home');
        }
      }
    );

    self.tab1 = 
      {label: i18nService.get('tab1Title')};
    self.tab2 = 
      {label: i18nService.get('tab2Title')};
    self.tab3 = 
      {label: i18nService.get('tab3Title')};

    self.tabs = [
      self.tab1,
      self.tab2,
      self.tab3
    ];

    self.openLink = function(link) {
      window.open(link, '_system');
    };

    self.indexChanged = function(index) {
      self.selectedTab = self.tabs[index];
    };
    self.selectContent = function(index) {
      self.indexChanged(index);
      self.content.slickGoTo(index);
    };
      
    self.selectedTab = self.tab1;
  }
}

angular.module('app').controller('tabsController', ['$rootScope', '$location', 'i18nService', Controller]);