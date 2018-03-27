
angular.module('mod2LabApp')
    .controller('CartController', cartOperations);

function cartOperations() { 

  this.cartItems = JSON.parse(localStorage.getItem('cartItems'));

  this.calculateTotal = calculateTotal;
  this.total  = 0;

  if (!this.cartItems) {
    localStorage.setItem('cartItems', JSON.stringify([]));
  }
  
  console.log('from cart', Array.isArray(JSON.parse(localStorage.getItem('cartItems'))));
}

function calculateTotal(subtotal) {
  this.total += subtotal;
  console.log(this.total);
}