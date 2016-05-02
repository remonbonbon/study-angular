(function() {
  'use strict';

  function Tab2Controller() {
    console.log('Tab2Controller: constructor');
    this.items = [
      {isCollapsed: false, content: 'item1'},
      {isCollapsed: false, content: 'item2'},
      {isCollapsed: false, content: 'item3'},
    ];
  }

  angular.module('app').controller('Tab2Controller', [
    Tab2Controller
  ]);
})();
