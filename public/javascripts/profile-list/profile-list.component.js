'use strict';

// Register component
angular.
  module('individualList').
  component('individualList', {
    templateUrl: '/javascripts/profile-list/profile-list.template.html',
    controller: ['Profile',
      function IndividualListController(Profile) {
        this.individuals = Profile.query();
        this.orderProp = 'order';
      }
    ]
  });
