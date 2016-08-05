'use strict';

describe('staticContent', function() {

  beforeEach(module('staticContent'));

  describe('StaticContentController', function() {

    var ctrl;
    beforeEach(inject(function($componentController) {
      ctrl = $componentController('staticContent');
    }));

    it('should test controller properties', function() {
      expect(ctrl.slug).toBe('imprint');
    });

  });

});
