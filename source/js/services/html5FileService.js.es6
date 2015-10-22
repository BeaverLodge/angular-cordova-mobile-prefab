class Service {
  constructor($q) {
    this.$q = $q;
  }

  existingFor(url) {
    let deferred = this.$q.defer();

    deferred.resolve(url);

    return deferred.promise;
  }

  store(blob, url) {
    let deferred = this.$q.defer();

    let fileReader = new FileReader();
    fileReader.onload = (e) =>
      deferred.result(e.target.result);

    return deferred.promise;
  }
}

if (!window.isWebView) {
  angular.module('app').service('fileService', ['$q', Service]);
}
