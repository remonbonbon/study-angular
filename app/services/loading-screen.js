(function() {
  'use strict';

  angular.module('app')
  .factory('loadingScreenService', ['$rootScope', function($rootScope) {
    return {
      begin: function() {
        console.log('loadingScreenService: loading begin');
        $rootScope.$broadcast('loading:begin');
      },
      end: function() {
        console.log('loadingScreenService: loading end');
        $rootScope.$broadcast('loading:end');
      },
    };
  }]);
})();
