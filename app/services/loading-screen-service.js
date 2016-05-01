(function() {
  'use strict';

  angular.module('app')
  .factory('LoadingScreenService', ['$rootScope', function ($rootScope) {
    return {
      begin: function() {
        console.log('LoadingScreenService: loading begin');
        $rootScope.$broadcast('loading:begin');
      },
      end: function() {
        console.log('LoadingScreenService: loading end');
        $rootScope.$broadcast('loading:end');
      },
    };
  }]);
})();
