'use strict';

describe('individualList', function() {

  // Load the module that contains the `individualList` component before each test
  beforeEach(module('individualList'));

  // Test the controller
  describe('IndividualListController', function() {

    var ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('individualList');
    }));

    it('should create a `individual` model with 3 individuals', function() {
      expect(ctrl.individuals.length).toBe(3);
    });

    it('should set default value for `orderProp` model', function() {
      expect(ctrl.orderProp).toBe('order');
    });

  });

});
