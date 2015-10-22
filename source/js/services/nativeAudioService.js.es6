class Service {
  constructor() {}

  load(file) {
    if (this.media) {
      this.media.stop();
      this.media.release();
    }
    this.media = new Media(file, null, (e) => console.log(e));
  }

  play(file) {
    this.load(file);
    this.media.play();
  }

  stop() {
    if (this.media) {
      this.media.stop();
      this.media.release();
    }
  }
}  

if (window.isWebView) {
  angular.module('app').service('audioService', [Service]);
}