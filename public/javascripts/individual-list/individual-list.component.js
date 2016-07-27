'use strict';

// Register component
angular.
  module('individualList').
  component('individualList', {
    templateUrl: 'javascripts/individual-list/individual-list.template.html', // Note: The URL is relative to our `frontpage.html` file
    controller: ['$http',
      function IndividualListController($http) {
        var self = this;
        this.orderProp = 'order';

        $http.get('javascripts/data/individuals.json').then(function(response) {
          self.individuals = response.data;
        });

      }
    ]
  });
