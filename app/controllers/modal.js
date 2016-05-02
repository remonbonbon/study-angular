(function() {
  'use strict';

  function ModalController($uibModalInstance) {
    console.log('ModalController: constructor');
    this.date = new Date().toLocaleString();

    this.ok = function() {
      console.log('ModalController: ok');
      $uibModalInstance.close(Math.random());
    };
    this.cancel = function() {
      console.log('ModalController: cancel');
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular.module('app').controller('ModalController', [
    '$uibModalInstance', ModalController
  ]);
})();
