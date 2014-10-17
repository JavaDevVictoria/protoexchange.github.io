'use strict';

// Declare app level module which depends on filters, and services
angular.module('PX2App', [
    'PX2App.Kanzi',
    'PX2App.Welcome',
    'PX2App.Pricing',
    'PX2App.Resources',
    'PX2App.Account',
    'PX2App.config',
    'PX2App.decorators',
    'PX2App.directives',
    'PX2App.filters',
    'PX2App.routes',
    'PX2App.services'
  ])

  .run(['simpleLogin', function(simpleLogin) {
    simpleLogin.getUser();
  }]);
