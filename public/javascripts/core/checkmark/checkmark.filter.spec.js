'use strict';

describe('checkmark', function() {

  beforeEach(module('core'));

  it('should convert boolean values to unicode checkmark or cross', function() {
    inject(function(checkmarkFilter) { // when injecting a filter, we need to suffix its name with 'Filter'
      expect(checkmarkFilter(true)).toBe('sd');
      expect(checkmarkFilter(false)).toBe('x');
    });
  });

});
