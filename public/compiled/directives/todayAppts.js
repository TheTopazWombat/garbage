'use strict';

angular.module('app').directive('todayAppts', todayAppts);

function todayAppts() {
  return {
    templateUrl: './app/directives/today-appts.html'
  };
}