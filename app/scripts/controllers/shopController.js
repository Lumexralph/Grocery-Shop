angular.module('mod2LabApp')
     .controller('ShopController', ['MainService', '$scope',
       function (mainService, $scope) {
        this.data = [];
        this.category = [];
        this.subcategory = [];
        this.itemsInstock = [];
        this.checkItemInStock = inStock;
        this.itemInSubcategory = [];
        this.getCategory = getCategory;


        // get data
        mainService.message().then(result => {
          this.data = result.data;
          this.category = this.data[0].category;
          this.subcategory = this.data[0].subcategories[0].name;
          this.itemInSubcategory = this.data[0].subcategories[0].items;
          console.log('data from shpController', this.data);
        });

        // get items in stock
        function inStock(items) {
          items.forEach(element => {
            // empty the present in stock data
            this.itemsInstock = [];
            if (element.stock > 0) {
              this.itemsInstock.push(element);
            }
          });                 
        }

        function getCategory(categoryIndex, subcategoryIndex) {
          let presentData = this.data[categoryIndex];

          let category = presentData.category;

          let subcategory = presentData.subcategories[subcategoryIndex];

          let subcategoryName = subcategory.name;

          let presentSubcategoryItem = subcategory.items;

          // update the categories per click
          this.category = category;
          this.subcategory = subcategoryName;
          this.itemInSubcategory = presentSubcategoryItem;

          console.log(category, subcategory)
        }
       }
     ]);


