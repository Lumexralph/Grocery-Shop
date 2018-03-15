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
      this.imageSrc = [];

      // handle

      mainService.message().then(result => {
        let dataLength = result.data.length - 1;
        let subcategoryLength = result.data[dataLength].subcategories.length - 1;
        let itemLength = result.data[dataLength].subcategories[subcategoryLength].items.length - 1;

        let subcategoryIndex = Math.round(Math.random() * subcategoryLength);
        let itemIndex = Math.round(Math.random() * itemLength);


        // generate items for the carousel imageSrc array
        for (let i = 0; i <= dataLength; i++) {
          let item = result.data[i].subcategories[subcategoryIndex].items[itemIndex];

          this.imageSrc.push(item);
        }
        console.log(this.imageSrc);
      });

    }
  ]);
