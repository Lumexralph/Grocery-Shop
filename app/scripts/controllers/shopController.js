angular.module('mod2LabApp')
     .controller('ShopController', ['MainService', '$scope',
       function (mainService, $scope) {
        this.data = [];
        

        // get data
        mainService.message().then(result => {
          this.data = result.data;
          this.category = this.data[0].category;
          this.subcategory = this.data[0].subcategories[0].name;
          this.itemInSubcategory = this.data[0].subcategories[0].items;
          console.log('data from shpController', this.data);
        });
       }
     ]);


