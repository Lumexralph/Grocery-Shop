angular.module('mod2LabApp')
  .controller('ShopController', ['MainService',
    function (mainService) {
      this.toggleOn = 0;
      this.data = [];
      this.category = [];
      this.subcategory = [];
      this.itemsInstock = [];
      this.itemsInstockCopy = [];
      this.noOfItemsInstock = 0;
      this.itemInSubcategory = [];
      this.itemInSubcategoryCopy = [];

      this.getCategory = getCategory;
      this.sortByNone = sortByNone;
      this.sortAlphabetically = sortAlphabetically;
      this.sortByRating = sortByRating;

      // get data to start with
      mainService.message().then(result => {

        this.data = result.data;

        this.category = this.data[0].category;

        this.subcategory = this.data[0].subcategories[0].name;

        this.itemInSubcategory = this.data[0].subcategories[0].items;

        // make a copy
        this.itemInSubcategoryCopy = _.cloneDeep(this.itemInSubcategory);
        

        // to start the count of items at start of program
        this.noOfItemsInstock = countItem(this.itemInSubcategory).noOfItemsAvailable;

        this.itemsInstock = countItem(this.itemInSubcategory).itemInStock;

        this.itemsInstockCopy = _.cloneDeep(this.itemsInstock);

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

        this.itemInSubcategoryCopy = _.cloneDeep(this.itemInSubcategory);

        this.itemsInstock = availableItems.itemInStock;

        this.itemsInstockCopy = _.cloneDeep(this.itemsInstock);

        this.noOfItemsInstock = availableItems.noOfItemsAvailable;

        // reset instock toggle
        this.toggleOn = 0;


      }


      function countItem(items) {

        let noOfItemsAvailable = 0;

        let itemInStock = [];

        itemInStock = items.filter(el => el.stock > 0);

        noOfItemsAvailable = itemInStock.length;

        return {
          itemInStock,
          noOfItemsAvailable
        };

      }

      // sorting of products functions
      function sortByNone(items) {
        this.toggleOn ? this.itemsInstock = _.cloneDeep(items) : this.itemInSubcategory = _.cloneDeep(items);
        
        console.log('sort by none', this.itemsInstockCopy, this.itemInSubcategoryCopy);
        console.log(this.itemsInstock, this.itemInSubcategory);        
      }

      function sortAlphabetically(items) {
        items.sort((a, b) => a.name > b.name); 
        console.log('sorted alphabetically', items);
      }

      function sortByRating(items) {
        items.sort((a, b) => Number(b.rating) - Number(a.rating)); 
        console.log('sorted alphabetically', items);
      }

      
    }
  ]);


