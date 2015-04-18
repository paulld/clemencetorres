'use strict';

angular.module('clemencetorresApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    var container = angular.element(document.getElementById('container'));
    var section2 = angular.element(document.getElementById('section-2'));
    $scope.toTheTop = function() {
      container.scrollTop(0, 5000);
    }
    $scope.toSection2 = function() {
      container.scrollTo(section2, 0, 1000);
    }
  });