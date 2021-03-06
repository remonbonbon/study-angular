(function() {
  'use strict';

  function onLongPress($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var longPressTimeout = scope.$eval(attrs.longPressTimeout) || 1000;
        var timeoutHandler;

        element.bind('mousedown', function(evt) {
          timeoutHandler = $timeout(function() {
            // If the mouseup event hasn't fired,
            // apply the function given in on the element's on-long-press attribute
            scope.$apply(function() {
              scope.$eval(attrs.onLongPress);
            });
            element.triggerHandler('longpress');
          }, longPressTimeout);
        });

        element.bind('mouseup', function(evt) {
          // Prevent the onLongPress event from firing
          $timeout.cancel(timeoutHandler);
        });
      }
    };
  }

  angular.module('app').directive('onLongPress', [
    '$timeout', onLongPress
  ]);
})();
