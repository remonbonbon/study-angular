(function() {
  'use strict';

  function editable($timeout) {
    return {
      restrict: 'A',
      replace: false,
      templateUrl: 'directives/editable.html',
      scope: {
        editableModel: '=',
        onChange: '&',
      },
      link: function($scope, $elm, $attrs) {
        $scope.editing = false;

        $scope.begin = function() {
          console.log('editable: begin');
          $scope.editing = true;
          $scope.editingText = $scope.editableModel;
          // Focus after the input element is shown.
          $timeout(function() {
            $elm.find('input')[0].focus();
          }, 0);
        };
        $scope.cancel = function() {
          if (!$scope.editing) return;
          console.log('editable: cancel');
          $scope.editing = false;
        };
        $scope.done = function() {
          if (!$scope.editing) return;
          console.log('editable: done');
          $scope.editing = false;
          $scope.editableModel = $scope.editingText;
        };
        $scope.onKeydown = function(event) {
          var key = event.keyCode || event.which;
          // On Escape key
          if (key === 27) return $scope.cancel();
          // On Enter key
          if (key === 13) return $scope.done();
        };
      }
    };
  }

  angular.module('app').directive('editable', [
    '$timeout', editable
  ]);
})();
