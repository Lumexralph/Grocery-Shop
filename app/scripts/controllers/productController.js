'use strict';

angular.module('mod2LabApp')
    .controller('ProductController', ['MainService', function (mainService, $routeParams) {

      this.params = $routeParams;
      console.log(this.params);
      
    }]);