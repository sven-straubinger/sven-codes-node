'use strict';

// Register component
angular.
  module('individualList').
  component('individualList', {
    templateUrl: '/javascripts/individual-list/individual-list.template.html', // Note: The URL is relative to our `frontpage.html` file
    controller: function IndividualListController() {
      this.individuals = [
        {
          slug: 'Nexus S',
          order: 1
        }, {
          slug: 'Motorola XOOM™ with Wi-Fi',
          order: 3
        }, {
          slug: 'MOTOROLA XOOM™',
          order: 2
        }
      ];

      this.orderProp = 'order';

    }
  });
