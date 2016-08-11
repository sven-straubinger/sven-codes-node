angular
  .module('profileDetail')
  .component('profileDetail', {
    templateUrl: '/javascripts/profile-detail/profile-detail.template.html',
    controller: [ 'Profile','$routeParams',
      function ProfileDetailController(Profile, $routeParams){
        var self = this;
        this.slug = $routeParams.slug;

        self.profiles = Profile.query(function() {
          self.setImage('http://placehold.it/350x150');
        });

        self.setImage = function(imageUrl) {
          self.mainImageUrl = imageUrl;
        }

      }
    ]
  });
