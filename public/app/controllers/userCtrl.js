angular.module('app')
  .controller('userCtrl', userCtrl);

  function userCtrl($scope, userService) {
    $scope.getUser = function(userId) {
      userService.getUser(userId).then(function(response) {
        $scope.user = response;
      });
    };
  }
