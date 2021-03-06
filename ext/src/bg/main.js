// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone'
  }

});

require([

  // Load our app module and pass it to our definition function
  'src/inject/js/ga.js',
  'src/bg/background',
], function(App){
  // The "app" dependency is passed in as "App"
  //App.initialize();
});