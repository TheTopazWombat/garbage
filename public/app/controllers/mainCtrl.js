angular.module('app')
  .controller('mainCtrl', mainCtrl);

  function mainCtrl($scope, mainServ) {
    $scope.test = "Waddup";

    $scope.getAllProducts = function() {
      mainServ.getAllProducts()
        .then(function(response) {
          console.log(response);
          $scope.products = response;
        });
    };

  }
