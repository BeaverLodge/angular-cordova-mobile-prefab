// Mapping of key to name.
const EN = {
  homeTitle: 'Prefab',
  homeList: 'List',
  homeTabs: 'Tabs',
  homeData: 'Load Data',
  listTitle: 'List',
  detailsTitle: 'Details',
  tabsTitle: 'Tabs',
  tab1Title: 'Monkeys',
  tab2Title: 'Zebras',
  tab3Title: 'Volcanoes'
};

class Service {
  constructor() {
    this.defaultDictionary = EN;
    this.currentDictionary = this.defaultDictionary;
  }

  get(key) {
    return this.currentDictionary[key];
  }
}

angular.module('app').service('i18nService', [Service]);