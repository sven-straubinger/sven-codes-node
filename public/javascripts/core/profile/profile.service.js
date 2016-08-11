angular.
  module('core.profile').
  factory('Profile', ['$resource',
    function($resource) {
      return $resource('/api/profiles/:slug');
    }
  ])
