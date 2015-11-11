class Service {
  constructor($location) {
    this.$location = $location;
  }

  transitionTo(path, entryTransition, exitTransition) {
    const body = document.getElementsByTagName('body')[0];

    const existingTransitionClasses = _.filter(body.classList, (c) => c.indexOf('transition-') !== -1);
    existingTransitionClasses.forEach((c) => body.classList.remove(c));

    const entryTransitionClass = entryTransition ? `transition-enter-${entryTransition}` : 'transition-enter-fade';
    const exitTransitionClass = exitTransition ? `transition-exit-${exitTransition}` : 'transition-exit-fade';

    [entryTransitionClass, exitTransitionClass].forEach((c) => body.classList.add(c));

    this.$location.path(path);
  }
}

angular.module('app').service('transitionService', ['$location', Service])