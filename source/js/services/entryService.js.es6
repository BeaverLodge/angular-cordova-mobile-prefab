class Service {
  constructor($q) {
    this.$q = $q;

    // ['','','','','','','','', ''].forEach(function(i, idx) {
    //   Lawnchair({
    //     name: 'entries',
    //     adapter: 'dom'
    //   }, function(store) {
    //     store.save({
    //       key: idx,
    //       value: {id: idx, name: 'Entry ' + idx}
    //     });
    //   });
    // });
  }

  all() {
    let deferred = this.$q.defer();
    Lawnchair({
      name: 'entries',
      adapter: 'dom'
    }, function(store) {
      store.all(function(entries) {
        deferred.resolve(entries.map(function(e) {
          return e.value;
        }));
      });
    });
    return deferred.promise;
  }

  get(entryId) {
    let deferred = this.$q.defer();
    Lawnchair({
      name: 'entries',
      adapter: 'dom'
    }, function(store) {
      store.get(entryId, function(entry) {
        deferred.resolve(entry.value);
      });
    });
    return deferred.promise; 
  }

  save(entry) {
    Lawnchair({
      name: 'entries',
      adapter: 'dom'
    }, function(store) {
      store.save({
        key: entry.id,
        value: entry
      });
    });
  }

  clear() {
    Lawnchair({
      name: 'entries',
      adapter: 'dom'
    }, function(store) {
      store.nuke();
    });
  }
}

angular.module('app').service('entryService', ['$q', Service]);