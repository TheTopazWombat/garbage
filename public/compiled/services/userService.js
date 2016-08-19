'use strict';

angular.module('app').service('userService', userService);

function userService($http) {
  this.getUser = function (userId) {
    return $http({
      method: 'GET',
      url: ''
    });
  };

  this.requestAppointment = function (userId, time) {
    return $http({
      method: 'POST',
      url: ''
    });
  };
}