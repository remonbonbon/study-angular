(function() {
  'use strict';

  function Tab1Controller($uibModal) {
    console.log('Tab1Controller: constructor');
    this.$uibModal = $uibModal;
    this.modalResult = null;
  }
  Tab1Controller.prototype.onLongPress = function(value) {
    console.log('Tab1Controller: on Long press', value);
  };
  Tab1Controller.prototype.open = function() {
    console.log('Tab1Controller: open modal');
    var modalInstance = this.$uibModal.open({
      templateUrl: 'views/modal.html',
      controller: 'ModalController',
      controllerAs: 'modalCtrl',
      size: 'lg',
    });

    modalInstance.result.then(result => {
      console.log('Tab1Controller: modal closed: result =', result);
      this.modalResult = result;
    }, reason => {
      console.log('Tab1Controller: modal dismissed:', reason);
      this.modalResult = null;
    });
  };

  angular.module('app').controller('Tab1Controller', [
    '$uibModal', Tab1Controller
  ]);
})();
