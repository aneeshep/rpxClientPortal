'use strict';

describe('Service: npeProfiles', function () {

  // load the service's module
  beforeEach(module('rpxClientPortalApp'));

  // instantiate service
  var npeProfiles;
  beforeEach(inject(function (_npeProfiles_) {
    npeProfiles = _npeProfiles_;
  }));

  it('should do something', function () {
    expect(!!npeProfiles).toBe(true);
  });

});
