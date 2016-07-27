describe('IndividualListController', function() {

  beforeEach(module('svenCodesNode'));

  it('should create a `individual` model with 3 individuals', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('IndividualListController', {$scope: scope});

    expect(scope.individuals.length).toBe(3);
  }));

});
