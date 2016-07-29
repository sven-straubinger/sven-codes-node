'use strict';

describe('profileDetail', function() {

  // Load module
  beforeEach(module('profileDetail'));

  // Test controller
  describe('ProfileDetailController', function() {
    var $httpBackend, ctrl;

    // Inject componentController
    beforeEach(inject(function($componentController, $routeParams, _$httpBackend_) {
      $routeParams.slug = "some-slug";

      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/profiles')
                  .respond([{slug: 'Axel'}, {slug: 'Sven'}]);

      ctrl = $componentController('profileDetail');
    }));

    it('should set the slug received as url parameter', function() {
      expect(ctrl.slug).toBe('some-slug');
    });

    it('should set a placeholder to the main image url', function() {
      expect(ctrl.mainImageUrl).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.mainImageUrl).toBe('http://placehold.it/350x150');
    });

  });

});
