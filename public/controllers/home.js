angular.module("app").controller("homeController", ["$scope",
        "navigationInformation", function($scope, navigationInformation) {

            navigationInformation.pushNavigation([
                    {
                        "link": "/photography",
                        "title": "Photography"
                    }
            ]);
}]);
