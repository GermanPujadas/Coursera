angular.module("LunchCheckModule", []).controller("LunchCheckController", function ($scope) {

$scope.processData = function(){
  const inputArray = $scope.lunchInput && $scope.lunchInput
                                                  .split(',')
                                                  .filter(input => input.trim() !== "");
  $scope.inputArrayLength = inputArray && inputArray.length;
  $scope.resultMessage = $scope.inputArrayLength ? $scope.inputArrayLength > 3 ?
                                          'Too much!' : 'Enjoy!'
                            : 'Please enter data first';
};

$scope.getCssClass = function(){
  return 'enjoy';
}

});
