(function () {
    "use strict";

    angular.module("app", ['ngRoute', 'ngAnimate', 'ngLayout', 'ngNavigation']).config(
        function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider.when('/', {
                templateUrl: '/templates/home.html',
                controller: 'homeController'
            }).when('/photography', {
                templateUrl: '/templates/photography.html',
                controller: 'photographyController',
                resolve: {
                    'imageLayoutData': function(imageLayout) {
                        return imageLayout.promise;
                    }
                }

            }).when('/photography/:project', {
                templateUrl: '/templates/photography.html',
                controller: 'photographyController',
                resolve: {
                    'imageLayoutData': function(imageLayout) {
                        return imageLayout.promise;
                    }
                }
            });
        }
    );
})();
