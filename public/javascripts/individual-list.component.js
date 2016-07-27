'use strict';

// Register component
angular.
  module('svenCodesNode').
  component('individualList', {
    template:
        '<ul>' +
          '<li ng-repeat="individual in $ctrl.individuals">' +
            '<span>{{individual.slug}}</span>' +
          '</li>' +
        '</ul>',
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
