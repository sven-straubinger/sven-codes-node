'use strict';

angular.
  module('core.profile').
  factory('Profile', ['$resource',
    function($resource) {
      return $resource('profiles/:profileId.json', {}, {
        query: {
          method: 'GET',
          params: {profileId: 'profiles'},
          isArray: true
        }
      });
    }
  ])
