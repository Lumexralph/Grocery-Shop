'use strict';

angular.module('mod2LabApp')
    .controller('ProductController', ['MainService', '$routeParams',
    function (mainService, $routeParams) {

      this.params = $routeParams;
      console.log('param',this.params);
      
    }]);