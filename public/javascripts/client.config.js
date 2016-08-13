angular
  .module('svenCodesNode')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<profile-list></profile-list>'
        }).
        when('/imprint', {
          template: '<static-content></static-content>'
        }).
        otherwise('/');
    }

  ]);
