'use strict';

describe('individualDetail', function() {

  // Load module
  beforeEach(module('individualDetail'));

  // Test controller
  describe('IndividualDetailController', function() {
    var ctrl;

    // Inject componentController
    beforeEach(inject(function($componentController) {
      ctrl = $componentController('individualDetail');
    }));

    if('should do something', function() {
      expect(ctrl.slug).toBe('some-slug');
    });

  });

});
