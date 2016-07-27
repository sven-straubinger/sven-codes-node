'use strict';

describe('individualList', function() {

  // Load the module that contains the `individualList` component before each test
  beforeEach(module('svenCodesNode'));

  // Test the controller
  describe('IndividualListController', function() {

    it('should create a `individual` model with 3 individuals', inject(function($componentController) {
      var ctrl = $componentController('individualList');
      expect(ctrl.individuals.length).toBe(3);
    }));

  });

});
