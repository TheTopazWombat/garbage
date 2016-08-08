angular.module('app')
  .service('mainServ', mainServ);

  function mainServ($http) {
    this.getCustomerById = function(id) {
      return $http({
        method: 'GET',
        url: '/customers/' + id
      });
    };

    this.getAllProducts = function() {
      return $http({
        method: 'GET',
        url: '/products'
      }).then(function(response) {
        return response.data;
      });
    };

    
  }
