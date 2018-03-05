'use strict';

/**
 * @ngdoc function
 * @name mod2LabApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mod2LabApp
 */
angular.module('mod2LabApp')
  .controller('MainCtrl', ['MainService', 
  function (mainService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    mainService.message().then(result => this.message= result.data.message);
  
  }
]);
