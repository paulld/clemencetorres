'use strict';

angular.module('clemencetorresApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'duScroll'
])
  .value('duScrollDuration', 1500)
  .value('duScrollOffset', 30)
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });