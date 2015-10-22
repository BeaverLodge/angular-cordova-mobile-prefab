window.isWebView = document.URL.indexOf('http://') === -1 ? true : false;

class Platform {
  constructor() {
    this.readyFlag = false;
    this.readyCallbacks = [];

    if (window.isWebView) {
      document.addEventListener('deviceready', () => {
        this.readyFlag = true;
        this.readyCallbacks.forEach(function(cb) { return cb(); });
        this.readyCallbacks = [];
      });
    } else {  
      this.readyFlag = true;
    }
  }

  isReady(callback) {
    if (this.readyFlag) {
      return callback();
    } else {
      return this.readyCallbacks.push(callback);
    }
  }
}

window.Platform = new Platform();