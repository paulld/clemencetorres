'use strict';

describe('Controller: BioPortfolioCtrl', function () {

  // load the controller's module
  beforeEach(module('clemencetorresApp'));

  var BioPortfolioCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BioPortfolioCtrl = $controller('BioPortfolioCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
