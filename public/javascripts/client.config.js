angular
  .module('svenCodesNode')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<individual-list></individual-list>'
        }).
        when('/profiles/:slug', {
          template: '<individual-detail></individual-detail>'
        }).
        otherwise('/');
    }

  ]);
