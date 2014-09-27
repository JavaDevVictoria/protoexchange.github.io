'use strict';

/* Filters */

angular.module('shortcircuitIOApp.filters', [])
   .filter('interpolate', ['version', function(version) {
      return function(text) {
         return String(text).replace(/\%VERSION\%/mg, version);
      }
   }])

   .filter('reverse', function() {
      return function(items) {
         return items.slice().reverse();
      };
   });
