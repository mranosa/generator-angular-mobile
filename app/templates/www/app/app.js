'use strict';

angular.module('<%= scriptAppName %>', [<%= angularModules %>])
  <% if(filters.ngroute) { %>.config(function ($routeProvider, $locationProvider<% if(filters.auth) { %>, $httpProvider<% } %>) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });<% } %><% if(filters.uirouter) { %>.config(function ($stateProvider, $urlRouterProvider, $locationProvider<% if(filters.auth) { %>, $httpProvider<% } %>) {
    $urlRouterProvider
      .otherwise('/');
  });<% } %>