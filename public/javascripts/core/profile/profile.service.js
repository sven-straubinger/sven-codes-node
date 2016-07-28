'use strict';

angular.
  module('core.profile').
  factory('Profile', ['$resource',
    function($resource) {
      return $resource('/javascripts/data/:profileId.json', {}, {
        query: {
          method: 'GET',
          params: {profileId: 'individuals'},
          isArray: true
        }
      });
    }
  ])
