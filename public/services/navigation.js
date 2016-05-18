(function() {
    "use strict";

    angular.module("ngNavigation", []).factory("navigationInformation", [function() {
        var navigationInformation = {
            _queue: []
        };

        navigationInformation.pushNavigation = function(navigation) {
            navigationInformation._queue.push(navigation);
        }

        navigationInformation.popNavigation = function() {

            if (navigationInformation._queue.length < 2) {
                return;
            }

            navigationInformation._queue.splice(0);
        }

        navigationInformation.swapNavigation = function() {

        }

        navigationInformation.ensureNavigation = function() {

        }

        navigationInformation.getNavigation = function() {
            return navigationInformation._queue[navigationInformation._queue.length - 1];
        }

        return navigationInformation;
    }]);


})();


