'use strict';

angular
  .module('individualDetail')
  .component('individualDetail', {
    templateUrl: 'javascripts/individual-detail/individual-detail.template.html',
    controller: [ '$http','$routeParams',
      function IndividualDetailController($http, $routeParams){
        var self = this;
        this.slug = $routeParams.slug;

        self.setImage = function(imageUrl) {
          self.mainImageUrl = imageUrl;
        }

        $http.get('javascripts/data/individuals.json').then(function(response) {
          self.individuals = response.data;
          self.setImage('http://placehold.it/350x150');
        });

      }
    ]
  });
