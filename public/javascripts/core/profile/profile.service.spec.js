'use strict';

describe('Profile', function() {

  var $httpBackend;
  var Profile;
  var profileData  = { slug: 'sven' }
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

    $httpBackend.when('GET', '/api/profiles').respond(profilesData);
    $httpBackend.when('GET', '/api/profiles/sven').respond(profileData);

    Profile = _Profile_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch all profiles', function() {
    var profiles = Profile.query();
    expect(profiles).toEqual([]);

    $httpBackend.flush();
    expect(profiles).toEqual(profilesData);
  });

  it('should fetch one profile', function() {
    var profile = Profile.get({slug: 'sven'});
    expect(profile).toEqual({});

    $httpBackend.flush();
    expect(profile).toEqual(profileData);
  });

})
