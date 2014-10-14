// https://github.com/DaftMonk/generator-angular-fullstack/blob/master/util.js
'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var genUtils = require('../util.js');

var AngularMobileGenerator = yeoman.generators.Base.extend({
  initializing: function() {
    this.argument('name', {
      type: String,
      required: false
    });
    this.appname = this.name || path.basename(process.cwd());
    this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));

    this.scriptAppName = this.appname + genUtils.appName(this);
    this.appPath = this.env.options.appPath;
    this.pkg = require('../package.json');

    this.filters = {};
  },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the supreme AngularMobile generator!'
    ));

    var prompts = [{
      type: "list",
      name: "router",
      default: 1,
      message: "What Angular router would you like to use?",
      choices: ["ngRoute", "uiRouter"],
      filter: function(val) {
        return val.toLowerCase();
      }
    }];

    this.prompt(prompts, function(answers) {
      this.filters[answers.router] = true;

      done();
    }.bind(this));
  },

  saveSettings: function() {
    if (this.skipConfig) return;
    this.config.set('insertRoutes', true);
    this.config.set('registerRoutesFile', 'server/routes.js');
    this.config.set('routesNeedle', '// Insert routes below');

    this.config.set('routesBase', '/api/');
    this.config.set('pluralizeRoutes', true);

    this.config.set('insertSockets', true);
    this.config.set('registerSocketsFile', 'server/config/socketio.js');
    this.config.set('socketsNeedle', '// Insert sockets below');

    this.config.set('filters', this.filters);
    this.config.forceSave();
  },

  compose: function() {
    var appPath = 'www/app/';
    var filters = [];
    var extensions = ['css', 'js', 'html'];

    if (this.filters.ngroute) filters.push('ngroute');
    if (this.filters.uirouter) filters.push('uirouter');

    this.composeWith('ng-component', {
      options: {
        'routeDirectory': appPath,
        'directiveDirectory': appPath,
        'filterDirectory': appPath,
        'serviceDirectory': appPath,
        'filters': filters,
        'extensions': extensions,
        'basePath': 'www'
      }
    }, {
      local: require.resolve('generator-ng-component/app/index.js')
    });
  },

  ngModules: function() {
    this.filters = this._.defaults(this.config.get('filters'));

    var angModules = [
      "'ngCookies'",
      "'ngResource'",
      "'ngSanitize'",
      "'ngCordovaMocks'"
    ];

    if (this.filters.ngroute) angModules.push("'ngRoute'");
    if (this.filters.uirouter) angModules.push("'ui.router'");

    this.angularModules = "\n  " + angModules.join(",\n  ") + "\n";
  },

  generate: function() {
    this.sourceRoot(path.join(__dirname, './templates'));
    genUtils.processDirectory(this, '.', '.');
  },

  end: function() {
    this.installDependencies();
  }
});

module.exports = AngularMobileGenerator;