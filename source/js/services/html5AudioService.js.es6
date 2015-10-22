class Service {
  constructor() {
    this.player = $('.player');
    this.player.jPlayer(
      {
        loadeddata: (event) => {},
        timeupdate: (event) => {},
        ended: (event) => {}
      }
    );
  }

  load(file) {
    this.player.jPlayer('stop')
               .jPlayer('setMedia', {
                  mp3: file,
                  m4a: file
                });
  }

  play(file) {
    this.load(file);
    this.player.jPlayer('play');
  }

  stop() {
    this.player.jPlayer('stop');
  }
}

if (!window.isWebView) {
  angular.module('app').service('audioService', [Service])
}