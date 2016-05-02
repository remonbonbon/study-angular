(function() {
  'use strict';

  function Tab1Controller($uibModal, $timeout, LoadingScreenService) {
    console.log('Tab1Controller: constructor');
    this.$uibModal = $uibModal;
    this.$timeout = $timeout;
    this.LoadingScreenService = LoadingScreenService;
    this.modalResult = null;
    this.editText = 'Editable on long press';
  }
  Tab1Controller.prototype.onLongPress = function(value) {
    console.log('Tab1Controller: on Long press', value);
  };
  Tab1Controller.prototype.open = function() {
    var vm = this;

    console.log('Tab1Controller: open modal');
    var modalInstance = this.$uibModal.open({
      templateUrl: 'views/modal.html',
      controller: 'ModalController',
      controllerAs: 'modalCtrl',
      size: 'lg',
    });

    modalInstance.result.then(function(result) {
      console.log('Tab1Controller: modal closed: result =', result);
      vm.modalResult = result;
    }, function(reason) {
      console.log('Tab1Controller: modal dismissed:', reason);
      vm.modalResult = null;
    });
  };
  Tab1Controller.prototype.startLoading = function(time) {
    var vm = this;
    this.LoadingScreenService.begin();
    this.$timeout(function() {
      vm.LoadingScreenService.end();
    }, time);
  };

  angular.module('app').controller('Tab1Controller', [
    '$uibModal', '$timeout', 'LoadingScreenService', Tab1Controller
  ]);
})();
