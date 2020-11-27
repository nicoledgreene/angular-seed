var myApp = angular.module("myApp", []);

myApp.controller("about", ["$scope", function($scope) {
  $scope.name = "Joe";
  $scope.age = 25;
}]);
