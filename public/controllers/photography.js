(function() {
    "use strict";

    angular.module("app").controller("photographyController",
        ["$scope",
         "$routeParams",
         "imageLayout",
         function($scope, $routeParams, imageLayout) {

             let project = $routeParams.project;
             if (project !== undefined) {
                 // We are viewing a project page.
                 if (imageLayout.getPortfolio().hasOwnProperty(project)) {
                     $scope.images = imageLayout.getPortfolio()[project];
                 }
             } else {
                 $scope.images = [];
             }

             $scope.projects = Object.getOwnPropertyNames(imageLayout.getPortfolio());

        }]);
})();

