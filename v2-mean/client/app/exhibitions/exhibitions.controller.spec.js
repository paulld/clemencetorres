'use strict';

describe('Controller: ExhibitionsCtrl', function () {

  // load the controller's module
  beforeEach(module('clemencetorresApp'));

  var ExhibitionsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExhibitionsCtrl = $controller('ExhibitionsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
