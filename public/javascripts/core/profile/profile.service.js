'use strict';

angular.
  module('core.profile').
  factory('Profile', ['$resource',
    function($resource) {
      return $resource('/api/:profileId', {}, {
        query: {
          method: 'GET',
          params: {profileId: 'profiles'},
          isArray: true
        }
      });
    }
  ])
