'use strict';

describe('individualDetail', function() {

  // Load module
  beforeEach(module('individualDetail'));

  // Test controller
  describe('IndividualDetailController', function() {
    var ctrl;

    // Inject componentController
    beforeEach(inject(function($componentController, $routeParams) {
      $routeParams.slug = "some-slug";
      ctrl = $componentController('individualDetail');
    }));

    it('should set the slug received as url parameter', function() {
      expect(ctrl.slug).toBe('some-slug');
    });

    it('should set a placeholder to the main image url', function() {
      expect(ctrl.mainImageUrl).toBe('some-slug');
    });

  });

});
