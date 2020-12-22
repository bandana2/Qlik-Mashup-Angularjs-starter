var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );


var config = {
    host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
    
};

// const baseUrl = ( config.isSecure ? 'https://' : 'http://' ) + config.host + (config.port ? ':' + config.port : '') + config.prefix;
require.config({
  // baseUrl: `${baseUrl}resources`,
  baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources",
  // webIntegrationId: config.webIntegrationId// only needed in QCS and QSEoK
  paths: {
    
    myAngularModule: "../Extensions/Angularjs-starter/my-angular-module", //update this path according to your environment
    ngAnimate: "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.min",
    ngAria: "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-aria.min",
    ngMessages: "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-messages.min",
    ngMaterial: "https://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min",
    ngMdIcons: "//cdn.jsdelivr.net/angular-material-icons/0.4.0/angular-material-icons.min"

  }
});

require(["js/qlik"], function (qlik) {
  require(["angular", "myAngularModule"], function (angular) {
    angular.bootstrap(document, ["myAngularModule", "qlik-angular"]);
    console.log(angular.version)
  });
});