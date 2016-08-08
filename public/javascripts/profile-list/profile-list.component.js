'use strict';

// Register component
angular.
  module('profileList').
  component('profileList', {
    templateUrl: '/javascripts/profile-list/profile-list.template.html',
    controller: ['Profile',
      function ProfileListController(Profile) {
        this.profile = Profile.get({slug: 'sven'});

        this.ambient = function ambient(active, slug) {
          if(active) {
            $('body').addClass('bg-' + slug);
          } else {
            $('body').removeClass('bg-' + slug);
          }
        }

        this.scrollTo = function scrollTo(elementId) {
          $("html, body").animate({ scrollTop: $(elementId).position().top }, 550, "swing");
          return false;
        }

      }
    ]
  });
