angular
  .module('svenCodesNode')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<profile-list></profile-list>'
        }).
        when('/profiles/:slug', {
          template: '<profile-detail></profile-detail>'
        }).
        otherwise('/');
    }

  ]);
