'use strict';

// Register component
angular.
  module('profileList').
  component('profileList', {
    templateUrl: '/javascripts/profile-list/profile-list.template.html',
    controller: ['Profile',
      function ProfileListController(Profile) {
        this.profile = Profile.get({slug: 'sven'});

        this.ambient = function ambient(active) {
          var color = active ? 'blue' : 'black';
          $('body').css('background-color', color);
        }

      }
    ]
  });
