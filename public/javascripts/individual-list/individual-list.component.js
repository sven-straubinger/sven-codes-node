'use strict';

// Register component
angular.
  module('individualList').
  component('individualList', {
    templateUrl: 'javascripts/individual-list/individual-list.template.html', // Note: The URL is relative to our `frontpage.html` file
    controller: ['Profile',
      function IndividualListController(Profile) {
        this.individuals = Profile.query();
        this.orderProp = 'order';
      }
    ]
  });
