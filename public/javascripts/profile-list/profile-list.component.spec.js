'use strict';

describe('individualList', function() {

  // Load the module that contains the `individualList` component before each test
  beforeEach(module('individualList'));

  // Test the controller
  describe('IndividualListController', function() {

    // We configure "fake" responses to server requests by calling methods on a mock service called $httpBackend
    var $httpBackend, ctrl;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/profiles')
                  .respond([{slug: 'Axel'}, {slug: 'Sven'}]);

      ctrl = $componentController('individualList');
    }));

    it('should create a `individuals` property with 2 individuals fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);
      expect(ctrl.individuals).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.individuals).toEqual([{slug: 'Axel'}, {slug: 'Sven'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('order');
    });

  });

});
