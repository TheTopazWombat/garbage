'use strict';

angular.module('app').controller('userCtrl', userCtrl);

function userCtrl($scope, userService, $rootScope, mainServ) {
    $scope.getUser = function (userId) {
        userService.getUser(userId).then(function (response) {
            $scope.user = response;
        });
    };
    $scope.apptInfo = [];
    $scope.getApptInfo = function () {};
    $scope.apptsTest = [];
    // console.log($rootScope.testUser);


    $scope.beforeRender = function ($view, $dates, $leftDate, $upDate, $rightDate) {
        var index = Math.floor(Math.random() * $dates.length);
        $dates[index].selectable = false;
        // console.log($dates);
        for (var i in $dates) {
            for (var k in $scope.apptsTest) {
                if (moment($dates[i].utcDateValue)._d === $scope.apptsTest[k]) {
                    $dates[i].selectable = false;
                }
            }
        }
        // console.log(moment($dates[1].utcDateValue)._d);
    };

    $scope.onTimeSet = function (newDate, oldDate, callThisNum) {

        $scope.newApptObj = {
            appt_time: newDate,
            appt_num: callThisNum
        };
        console.log($scope.newApptObj);
        $scope.callThisNum = '';
        $scope.apptsTest.push(newDate);
        console.log($scope.apptsTest);
    };
    $scope.toggle = function () {
        $scope.hidden = !$scope.hidden;
    };
}