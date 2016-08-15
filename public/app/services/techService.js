angular.module('app')
  .service('techService', techService);

  function techService($http) {
    this.getJobByInvoice = function(invoice) {
      // return {first_name: "Loda", last_name: "Berg", invoice: invoice, next_step: "Stop feeding and probably commit sudoku"};
      return $http({
        method: 'GET',
        url: '/jobs/' + invoice
      }).then(function(response) {
        // var results = JSON.parse(response);
        var resultsObj = response.data[0];
        console.log(resultsObj);
        return resultsObj;
      });
    };
    this.getAllCustomers = function() {
      return $http({
        method: 'GET',
        url: '/customers/all'
      }).then(function(response) {
        return response;
      });
    };
    this.getAllAppointments = function() {
      return $http({
        method: 'GET',
        url: '/appointments'
      }).then(function(response) {
        return response.data;
      });
    };
  }
