'use strict';

describe('Profile', function() {

  var $httpBackend;
  var Profile;
  var profilesData = [
    {slug: 'Profile X'},
    {slug: 'Profile Y'},
    {slug: 'Profile Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Profile` service before each test
  beforeEach(module('core.profile'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_Profile_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/javascripts/data/individuals.json').respond(profilesData);

    Profile = _Profile_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch profile data', function() {
    var profiles = Profile.query();
    expect(profiles).toEqual([]);

    $httpBackend.flush();
    expect(profiles).toEqual(profilesData);
  });

})
