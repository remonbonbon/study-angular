(function() {
  'use strict';

  function loadingScreen(SpinJSSpinner) {
    console.log('loadingScreen: constructor');
    return {
      restrict: 'A',
      replace: true,
      templateUrl: 'directives/loading-screen.html',
      scope: {},
      link: function($scope, $elm, $attrs) {
        $scope.loading = false;
        $scope.target = $elm[0];
        $scope.spinner = new SpinJSSpinner({
            lines: 13 // The number of lines to draw
          , length: 30 // The length of each line
          , width: 12 // The line thickness
          , radius: 35 // The radius of the inner circle
          , scale: 2.1 // Scales overall size of the spinner
          , corners: 0.8 // Corner roundness (0..1)
          , color: '#fff' // #rgb or #rrggbb or array of colors
          , opacity: 0.25 // Opacity of the lines
          , rotate: 0 // The rotation offset
          , direction: 1 // 1: clockwise, -1: counterclockwise
          , speed: 1.4 // Rounds per second
          , trail: 50 // Afterglow percentage
          , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
          , zIndex: 2e9 // The z-index (defaults to 2000000000)
          , className: 'spinner' // The CSS class to assign to the spinner
          , top: '50%' // Top position relative to parent
          , left: '50%' // Left position relative to parent
          , shadow: false // Whether to render a shadow
          , hwaccel: false // Whether to use hardware acceleration
          , position: 'absolute' // Element positioning
        });

        $scope.$on('loading:begin', function(event) {
          $scope.loading = true;
          $scope.spinner.spin($scope.target);
        });
        $scope.$on('loading:end', function(event) {
          $scope.loading = false;
          $scope.spinner.stop();
        });
        $scope.$on('$destroy', function () {
          $scope.loading = false;
          $scope.spinner.stop();
          $scope.spinner = null;
        });
      }
    };
  }

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
    }])
    .constant('SpinJSSpinner', Spinner)
    .directive('loadingScreen', ['SpinJSSpinner', loadingScreen]);
})();
