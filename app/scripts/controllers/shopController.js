angular.module('mod2LabApp')
     .controller('ShopController', ['MainService', '$scope',
       function (mainService, $scope) {
        this.toggleOn = 0;
        this.data = [];
        this.category = [];
        this.subcategory = [];
        this.itemsInstock = [];
        this.noOfItemsInstock = 0;
        // this.checkItemInStock = inStock;
        this.itemInSubcategory = [];
        this.getCategory = getCategory;


        // get data to start with
        mainService.message().then(result => {
          this.data = result.data;
          this.category = this.data[0].category;
          this.subcategory = this.data[0].subcategories[0].name;
          this.itemInSubcategory = this.data[0].subcategories[0].items;

          // to start the count of items at start of program
          this.noOfItemsInstock = countItem(this.itemInSubcategory).noOfItemsAvailable;

          this.itemsInstock = countItem(this.itemInSubcategory).itemInStock;

          console.log('On receiving data:', this.itemsInstock)          
          
        });

        
        function getCategory(categoryIndex, subcategoryIndex) {
          let presentData = this.data[categoryIndex];

          let category = presentData.category;

          let subcategory = presentData.subcategories[subcategoryIndex];

          let subcategoryName = subcategory.name;

          let presentSubcategoryItem = subcategory.items;

          let availableItems = countItem(presentSubcategoryItem);
          

          // update the categories per click
          
          this.category = category;
          this.subcategory = subcategoryName;
          this.itemInSubcategory = presentSubcategoryItem;
          this.itemsInstock = availableItems.itemInStock;
          this.noOfItemsInstock = availableItems.noOfItemsAvailable;

          // reset instock toggle
          this.toggleOn = 0;

          
        }


        function countItem(items) {

          let noOfItemsAvailable = 0;

          let itemInStock = [];

          itemInStock = items.filter(el => el.stock > 0 );

          console.log('from countitem function: ',itemInStock);

          noOfItemsAvailable  = itemInStock.length;

          return {
            itemInStock,
            noOfItemsAvailable
          };
          
        }
       }
     ]);


