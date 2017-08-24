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

  // Push notification using OneSignal
  ionic.Platform.ready(function() {
    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
    
    var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };

    window.plugins.OneSignal
      .startInit("1963cb3b-f80f-4bc5-b202-3b1d25c34b02")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
      
    // Call syncHashedEmail anywhere in your app if you have the user's email.
    // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
    // window.plugins.OneSignal.syncHashedEmail(userEmail);
  })


})
