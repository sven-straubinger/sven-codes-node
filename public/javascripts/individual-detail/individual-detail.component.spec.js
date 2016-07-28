'use strict';

describe('individualDetail', function() {

  // Load module
  beforeEach(module('individualDetail'));

  // Test controller
  describe('IndividualDetailController', function() {
    var $httpBackend, ctrl;

    // Inject componentController
    beforeEach(inject(function($componentController, $routeParams, _$httpBackend_) {
      $routeParams.slug = "some-slug";

      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('javascripts/data/individuals.json')
                  .respond([{slug: 'Axel'}, {slug: 'Sven'}]);

      ctrl = $componentController('individualDetail');
    }));

    it('should set the slug received as url parameter', function() {
      expect(ctrl.slug).toBe('some-slug');
    });

    it('should set a placeholder to the main image url', function() {
      expect(ctrl.mainImageUrl).toBe('http://placehold.it/350x150');
    });

  });

});
