'use strict';

describe('profileList', function() {

  // Load the module that contains the `profileList` component before each test
  beforeEach(module('profileList'));

  // Test the controller
  describe('ProfileListController', function() {

    // We configure "fake" responses to server requests by calling methods on a mock service called $httpBackend
    var $httpBackend, ctrl;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/profiles')
                  .respond([{slug: 'axel'}, {slug: 'sven'}]);

      ctrl = $componentController('profileList');
    }));

    it('should create a `profiles` property with 2 profiles fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);
      expect(ctrl.profiles).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.profiles).toEqual([{slug: 'axel'}, {slug: 'sven'}]);
    });

  });

});
