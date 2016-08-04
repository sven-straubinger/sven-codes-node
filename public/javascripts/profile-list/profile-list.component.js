'use strict';

// Register component
angular.
  module('profileList').
  component('profileList', {
    templateUrl: '/javascripts/profile-list/profile-list.template.html',
    controller: ['Profile',
      function ProfileListController(Profile) {
        this.profiles = Profile.query();
      }
    ]
  });
