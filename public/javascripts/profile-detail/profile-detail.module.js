'use strict';

// Define the `individualDetail` module
angular.module('individualDetail', [
  'ngRoute',      // This module depends on the ngRoute module for providing the $routeParams.
  'core.profile'  // We are explicit about the dependecies of a sub-module and we don't rely on dependencies
]);               // inherited from a parent module because that parent module might not be there some day.