(function() {
  'use strict';

  function ModalController($uibModalInstance) {
    console.log('ModalController: constructor');
    this.$uibModalInstance = $uibModalInstance;
    this.date = new Date().toLocaleString();
  }
  ModalController.prototype.ok = function() {
    console.log('ModalController: ok');
    this.$uibModalInstance.close(Math.random());
  };
  ModalController.prototype.cancel = function() {
    console.log('ModalController: cancel');
    this.$uibModalInstance.dismiss('cancel');
  };

  angular.module('app').controller('ModalController', [
    '$uibModalInstance', ModalController
  ]);
})();
