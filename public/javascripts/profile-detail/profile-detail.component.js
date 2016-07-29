'use strict';

angular
  .module('individualDetail')
  .component('individualDetail', {
    templateUrl: '/javascripts/profile-detail/profile-detail.template.html',
    controller: [ 'Profile','$routeParams',
      function IndividualDetailController(Profile, $routeParams){
        var self = this;
        this.slug = $routeParams.slug;

        self.individuals = Profile.query(function() {
          self.setImage('http://placehold.it/350x150');
        });

        self.setImage = function(imageUrl) {
          self.mainImageUrl = imageUrl;
        }

      }
    ]
  });
