// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  ionic.Platform.ready(function() {
    var push = new Ionic.Push({
      "debug": true
    });
 
    push.register(function(token) {
      console.log(token);
      console.log(JSON.stringify(token));
      console.log("My Device token:",token._token);
      push.saveToken(token);  // persist the token in the Ionic Platform
    });
  });
})
