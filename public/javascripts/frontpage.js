// Define the `svenCodesNode` module
var phonecatApp = angular.module('svenCodesNode', []);

// Define the `IndividualListController` controller on the `svenCodesNode` module
phonecatApp.controller('IndividualListController', function IndividualListController($scope) {
  $scope.individuals = [
    {
      slug: 'Nexus S'
    }, {
      slug: 'Motorola XOOM™ with Wi-Fi'
    }, {
      slug: 'MOTOROLA XOOM™'
    }
  ];
});
