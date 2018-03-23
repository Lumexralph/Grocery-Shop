'use strict';

angular.module('mod2LabApp')
    .controller('ProductController', ['MainService', '$routeParams',
    function (mainService, $routeParams) {

      this.params = $routeParams;
      this.product;

      console.log('param',this.params);

      let allProducts = [];

      // inject data from API
      mainService.message().then(result => {
        let data = result.data;

        // spread out all the items
        data.forEach(el => {
          el.subcategories.forEach(el => {
              allProducts.push(...el.items);
        
          });
        });

        this.product = allProducts.find(el => el.name === this.params.name);

        console.log('data from ProductController', this.product);
      }
    );
      
    }
  ]);
