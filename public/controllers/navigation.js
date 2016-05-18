(function() {
    "use strict";

    angular.module("app").controller("navigationController", ["$scope",
            "navigationInformation",
            function($scope, navigationInformation) {

                $scope.$watch('navigation',
                        function() {
                            return navigationInformation.getInformation();
                        },
                        function() {
                            $scope.navigation = navigationInformation.getNavigation();
                        }

                $scope.navigation = navigationInformation.getNavigation();
    }]);
})();
