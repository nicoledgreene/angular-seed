var myApp = angular.module("myApp", []);

// myApp.controller("about", ["$scope", function($scope) {
//   $scope.name = "Joe";
//   $scope.age = 25;
// }]);


myApp.controller("myController", ["$scope", function($scope) {
  $scope.error = {
      message: "A server error occurred",
      code: "500"
  };   
}])
.directive("errorWindow", function() {
  return {
      templateUrl: "error-window.html"
  }
});
