var myApp = angular.module("myApp", []);

// myApp.controller("about", ["$scope", function($scope) {
//   $scope.name = "Joe";
//   $scope.age = 25;
// }]);


// myApp.controller("myController", ["$scope", function($scope) {
//   $scope.error = {
//       message: "A server error occurred",
//       code: "500"
//   };   
// }])
// .directive("errorWindow", function() {
//   return {
//       templateUrl: "error-window.html"
//   }
// });


myApp.controller("myController", ["$scope", function($scope) {
  $scope.menuItems = [],
  $scope.addToMenu = function(i, p) {
    console.log('add to menu: ',i, p);
    menuItems.push({item: i, price: p});
  };
}])
.directive("simpleForm", function() {
  return {
    templateUrl: "simple-form.html",
    scope: {
      menuItem: "@",
      price: "@",
      addItem: "&"
    },
    link: function(scope) {
      console.log(scope);
    }
  }
});



