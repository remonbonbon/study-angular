(function() {
  'use strict';

  angular.module('app')
  .factory('loggerService', ['$rootScope', '$log', function($rootScope, $log) {
    return {
      debug: function(msg) {
        $log.debug(msg);
      },
      info: function(msg) {
        $log.info(msg);
        $rootScope.$broadcast('logger:info', msg);
      },
      warn: function(msg) {
        $log.warn(msg);
        $rootScope.$broadcast('logger:warn', msg);
      },
      error: function(msg) {
        $log.error(msg);
        $rootScope.$broadcast('logger:error', msg);
      },
    };
  }]);
})();
