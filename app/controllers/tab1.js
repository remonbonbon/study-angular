(function() {
  'use strict';

  function Tab1Controller($timeout, $uibModal, loadingScreenService) {
    console.log('Tab1Controller: constructor');
    this.modalResult = null;
    this.editText = 'Editable on long press';

    this.onLongPress = function(value) {
      console.log('Tab1Controller: on Long press', value);
    };
    this.open = function() {
      console.log('Tab1Controller: open modal');
      var modalInstance = $uibModal.open({
        templateUrl: 'views/modal.html',
        controller: 'ModalController',
        controllerAs: 'modal',
        size: 'lg',
      });

      var vm = this;
      modalInstance.result.then(function(result) {
        console.log('Tab1Controller: modal closed: result =', result);
        vm.modalResult = result;
      }, function(reason) {
        console.log('Tab1Controller: modal dismissed:', reason);
        vm.modalResult = null;
      });
    };
    this.startLoading = function(time) {
      loadingScreenService.begin();
      $timeout(function() {
        loadingScreenService.end();
      }, time);
    };
  }

  angular.module('app').controller('Tab1Controller', [
    '$timeout', '$uibModal', 'loadingScreenService', Tab1Controller
  ]);
})();
