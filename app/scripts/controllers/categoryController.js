'use strict';

/**
 * @ngdoc function
 * @name mod2LabApp.controller:CategoryController
 * @description
 * # MainCtrl
 * Controller of the mod2LabApp
 */
angular.module('mod2LabApp')
  .controller('CategoryController',
  function () {
    this.oneAtATime = true;
  
    console.log('bla');
  
    this.groups = [
      {
        title: "Dynamic Group Header - 1",
        content: "Dynamic Group Body - 1"
      },
      {
        title: "Dynamic Group Header - 2",
        content: "Dynamic Group Body - 2"
      }
    ];
  
    this.items = ['Item 1', 'Item 2', 'Item 3'];
  
    this.addItem = function() {
      var newItemNo = this.items.length + 1;
      this.items.push('Item ' + newItemNo);
    }
  });
