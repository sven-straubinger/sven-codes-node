angular
  .module('svenCodesNode')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/individuals', {
          template: '<individual-list></individual-list>'
        }).
        when('/individuals/:slug', {
          template: '<individual-detail></individual-detail>'
        }).
        otherwise('/individuals');
    }

  ]);
