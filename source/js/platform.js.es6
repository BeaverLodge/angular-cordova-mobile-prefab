window.isWebView = document.URL.indexOf('http://') === -1 ? true : false;

class Platform {
  constructor() {
    this.readyFlag = false;
    this.readyCallbacks = [];

    if (window.isWebView) {
      document.addEventListener('deviceready', () => {
        this.readyFlag = true;
        this.readyCallbacks.forEach(function(cb) { cb(); });
        this.readyCallbacks = [];
      });
    } else {  
      this.readyFlag = true;
    }
  }

  isReady(callback) {
    if (this.readyFlag) {
      callback();
    } else {
      this.readyCallbacks.push(callback);
    }
  }
}

window.Platform = new Platform();