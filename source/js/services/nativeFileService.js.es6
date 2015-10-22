class Service {
  constructor($q) {
    this.$q = $q;
  }

  filenameFor(url) {
    return url.hashCode();
  }

  existingFor(url) {
    let deferred = this.$q.defer();

    let handleError = () => deferred.reject();

    let fileExists = (entry) => {
      console.log("Using existing file for " + url + " at " + (entry.toInternalURL()));
      deferred.resolve(entry.toInternalURL());
    };

    let checkFilePresence = (fs) => {
      fs.root.getFile('jila/' + this.filenameFor(url),
                      {create: false},
                      fileExists,
                      handleError);
    };

    window.requestFileSystem(LocalFileSystem.PERSISTENT,
                             0,
                             checkFilePresence,
                             handleError);

    return deferred.promise;
  }

  store(blob, url) {
    let deferred = this.$q.defer();

    let handleError = () => {
      console.log("Error writing file for " + url);
      deferred.reject();
    };

    let gotFileSystem = (fs) => {
      fs.root.getDirectory('jila', {
        create: true
      }, gotDirectoryEntry, handleError);
    };

    let gotDirectoryEntry = (dir) => {
      dir.setMetadata((function() {}), handleError, { "com.apple.MobileBackup": 1});

      dir.getFile(this.filenameFor(url),
                 {create: true},
                 gotFileEntry,
                 handleError);
    };

    let gotFileEntry = (entry) => {
      entry.createWriter(function(writer) {
        writer.onwriteend = function(e) {
          console.log("Saving " + url + " to " + (entry.toInternalURL()));
          deferred.resolve(entry.toInternalURL());
        };
        writer.onerror = handleError;
        writer.write(blob);
      });
    };

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFileSystem, handleError);

    return deferred.promise;
  }
}

if (window.isWebView) {
  angular.module('app').service('fileService', ['$q', Service]);
}