'use strict';

// Register component
angular.
  module('individualList').
  component('individualList', {
    templateUrl: '/javascripts/individual-list/individual-list.template.html', // Note: The URL is relative to our `frontpage.html` file
    controller: function IndividualListController() {
      this.individuals = [
        {
          slug: 'Nexus S'
        }, {
          slug: 'Motorola XOOM™ with Wi-Fi'
        }, {
          slug: 'MOTOROLA XOOM™'
        }
      ];
    }
  });
