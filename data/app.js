//packaged application compatability code
if (typeof iconsDir == "undefined") {
	//temporary fix for packaged application compatability
	var iconsDir = __dirname + '/content/icons';
}
if (typeof app == "undefined") {
	var app = require('appjs');
	app.serveFilesFrom(__dirname + '/content');
}
var window = app.createWindow({
  width  : 640,
  height : 368,
  icons  : iconsDir,
  showChrome : false,
  alpha: true,
  autoResize: false,
  resizable: true
  
  /***************************** defaults ********************************
* url            : 'http://appjs', // serve static file root and routers
* autoResize     : false,          // resizes in response to html content
* showChrome     : true,           // show border and title bar
* resizable      : false,          // control if users can resize window
* disableSecurity: true,           // allow cross origin requests
* opacity        : 1,              // flat percent opacity for window
* alpha          : false,          // per-pixel alpha blended (Win & Mac)
* fullscreen     : false,          // client area covers whole screen
* left           : -1,             // centered by default
* top            : -1,             // centered by default
*************************************************************************/

});

window.on('create', function(){
  console.log("Window Created");
  window.frame.show();
  window.frame.center();
});

window.on('ready', function(){
  console.log("Window Ready");
  window.require = require;
  window.process = process;
  window.module = module;

  function F12(e){ return e.keyIdentifier === 'F12' }
  function Command_Option_J(e){ return e.keyCode === 74 && e.metaKey && e.altKey }

  window.addEventListener('keydown', function(e){
    if (F12(e) || Command_Option_J(e)) {
      window.frame.openDevTools();
    }
	
  });
  
  this.dispatchEvent(new this.Event('app-ready'));
});

window.on('close', function(){
  console.log("Window Closed");
});
