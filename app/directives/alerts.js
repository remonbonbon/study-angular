(function() {
  'use strict';

  function alerts(SpinJSSpinner) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/alerts.html',
      scope: {},
      link: function(scope, element, attrs) {
        scope.alerts = [];
        var id = 0;

        scope.$on('logger:info', function(event, msg) {
          scope.addAlert('success', msg, true);
        });
        scope.$on('logger:warn', function(event, msg) {
          scope.addAlert('warning', msg, true);
        });
        scope.$on('logger:error', function(event, msg) {
          scope.addAlert('danger', msg, false);
        });
        scope.addAlert = function(type, msg, canTimeout) {
          id += 1;
          scope.alerts.push({
            id: id,
            type: type,
            message: msg,
            timeout: canTimeout ? 3000 : null,
          });
        };
        scope.closeAlert = function(id) {
          console.log('alert: closeAlert(%d)', id);
          scope.alerts = scope.alerts.filter(function(al) {
            return al.id !== id;
          });
        };
      }
    };
  }

  angular.module('app').directive('alerts', [alerts]);
})();
