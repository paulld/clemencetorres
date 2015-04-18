'use strict';

angular.module('clemencetorresApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };


    // var container = angular.element(document.getElementById('container'));
    // var section2 = angular.element(document.getElementById('section-2'));
    // $scope.toTheTop = function() {
    //   container.scrollTop(0, 5000);
    // }
    // $scope.toSection2 = function() {
    //   container.scrollTo(section2, 0, 1000);
    // }

    console.log($scope);
  });
