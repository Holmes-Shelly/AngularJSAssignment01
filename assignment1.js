(function(){
'use strict';
angular.module('EatApp', [])
.controller('EatController', EatController)

EatController.$inject = ['$scope'];
function EatController($scope){
  $scope.food = ""
  $scope.stateOfBeing = ""
  $scope.countFood = function(){
    if ($scope.food.length == 0)
      {
        $scope.stateOfBeing = "Please enter data first.";
      }
    return $scope.food.split(/\W+/).length
  };
  $scope.checkState = function(){
    //alert($scope.countFood());
    if ($scope.countFood() <= 3)
      {
        $scope.stateOfBeing = "Enjoy!";
      }
    if ($scope.countFood() > 3)
      {
        $scope.stateOfBeing = "Too much!";
      }
  };
}
})();
