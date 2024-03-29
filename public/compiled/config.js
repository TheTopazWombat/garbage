'use strict';

angular.module('app')
// .run(function($rootScope, $state) {
//     // $rootScope.$on('$stateChangeError', (e, toState, toParams, fromState, fromParams, error) => {
//     //     $rootScope.requestedUrl = toState.name;
//     //     console.log(error);
//     //     if (error == "Not Authorized") {
//     //         console.log('not authorized');
//     //         $state.go($state.current.name);
//     //     } else if (error == "Not Logged In") {
//     //         console.log('not logged in');
//     //         $state.go('login');
//     //     }
//
//     });
// })
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('landing', {
        url: '/',
        // controller: './app/controllers/userCtrl.js',
        templateUrl: 'assets/templates/landing.html'
    }).state('login', {
        url: '/login',
        templateUrl: 'assets/templates/login.html'
    }).state('cm-info', {
        url: '/cm-info',
        templateUrl: 'assets/templates/cm-info-tech.html',
        resolve: {
            security: function security(mainServ, $state) {

                return mainServ.isAuthed().catch(function (err) {
                    console.log("Unauthorized: ", err);
                    if (err.status === 401) {
                        $state.go('login');
                    }
                });
            }
        }
    }).state('cm-home', {
        url: '/cm-home',
        templateUrl: 'assets/templates/cm-home.html',
        resolve: {
            security: function security(mainServ, $state) {

                return mainServ.isAuthed().catch(function (err) {
                    console.log("Unauthorized: ", err);
                    if (err.status === 401) {
                        $state.go('login');
                    }
                });
            }
        }
    }).state('tech-sched', {
        url: '/tech-sched',
        templateUrl: 'assets/templates/tech-sched.html',
        resolve: {
            security: function security(mainServ, $state) {

                return mainServ.isTech().catch(function (err) {
                    console.log("Unauthorized: ", err);
                    if (err.status === 401) {
                        $state.go('login');
                    }
                });
            }
        }
    }).state('tech-home', {
        url: '/tech-home',
        templateUrl: 'assets/templates/tech-home.html',
        resolve: {
            security: function security(mainServ, $state) {

                return mainServ.isTech().catch(function (err) {
                    console.log("Unauthorized: ", err);
                    if (err.status === 401) {
                        mainServ.authErrorModal();
                        $state.go('login');
                    }
                });
            }

        }
    });
});