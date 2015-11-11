class Controller {
  constructor($rootScope, $routeParams, entryService, transitionService, audioService) {
    const self = this;

    $rootScope.$emit('navigationConfig',
      {
        labelForTitle: "",
        backAction: function() {
          transitionService.transitionTo('/list', 'slide-right', 'slide-right')
        }
      }
    );

    self.entry = {};

    entryService.get($routeParams.entryId).then((entry) => {
      self.entry = entry;
      self.formattedDescription = entry.description;
      $rootScope.$emit('navigationConfig',
        {
          labelForTitle: entry.entry_word
        }
      );
    });

    self.listen = () => {
      if (self.entry) { audioService.play(self.entry.audio); }
    };
  }
}

angular.module('app').controller('entryController', ['$rootScope', '$routeParams', 'entryService', 'transitionService', 'audioService', Controller]);