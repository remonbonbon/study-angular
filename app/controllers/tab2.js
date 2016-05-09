(function() {
  'use strict';

  function Tab2Controller(_) {
    console.log('Tab2Controller: constructor');
    this.items = [
      {id: 1001, isCollapsed: false, content: 'item1', style: {color: 'red'}},
      {id: 1002, isCollapsed: false, content: 'item2', style: {color: 'blue'}},
      {id: 1003, isCollapsed: false, content: 'item3', style: {color: 'green'}},
      {id: 1004, isCollapsed: false, content: 'item4', style: {color: 'cyan'}},
      {id: 1005, isCollapsed: false, content: 'item5', style: {color: 'orange'}},
    ];

    this._moveUpDown = function(index, up) {
      var shift = up ? -1 : 1;
      var a = this.items[index];
      var b = this.items[index + shift];
      if (!a || !b) return;
      this.items[index + shift] = a;
      this.items[index] = b;
    };
    this.moveUp = function(index) {
      this._moveUpDown(index, true);
    };
    this.moveDown = function(index) {
      this._moveUpDown(index, false);
    };
  }

  angular.module('app').controller('Tab2Controller', [
    `lodash`, Tab2Controller
  ]);
})();
