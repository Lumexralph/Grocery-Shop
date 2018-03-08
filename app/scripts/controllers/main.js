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
    this.active = 0;
    this.toggleOn = 1;
    this.imageSrc = [
      'images/a.jpg',
      'images/b.jpg'
    ];

    // handle

    mainService.message().then(result => this.message= result.data.message);
  
  }
]);
