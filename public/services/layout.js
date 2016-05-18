(function() {
    "use strict";

    angular.module("ngLayout", []).factory("imageLayout", ["$http", function($http) {
        var portfolio = {};

        let promise = $http.get("/assets/layout.json").success(function(res) {
            portfolio = res;
        });

        return {
            promise: promise,
            getPortfolio: function() {
                return portfolio;
            }
        }
    }]);

})();
