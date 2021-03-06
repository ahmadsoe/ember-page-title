/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    babel: {
      includePolyfill: true
    },
    fingerprint: {
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'eot', 'ttf', 'woff', 'woff2', 'svg'],
      prepend: '/ember-page-title/'
    },
    sassOptions: {
      includePaths: ['tests/dummy/app']
    },
    svg: {
      paths: [
        'tests/dummy/public/assets/images'
      ]
    }    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
