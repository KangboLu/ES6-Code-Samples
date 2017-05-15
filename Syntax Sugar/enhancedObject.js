// a bookshop class ES5 
// function createBookShop(inventory) {
//   return {
//     inventory: inventory,
//     inventoryValue: function () {
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     },
//     priceForTitle: function (title) {
//       return this.inventory.find(book => book.title === title).price;
//     }
//   };
// }

// a bookshop class ES6
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

// array to represent inventory
const inventory = [
  {title: 'Harry Potter', price: 10},
  {title: 'Eloquent Javascript', price: 15},
  {title: '100 Designer Need to Know', price: 20},
];

// create bookShop object 
const bookShop = createBookShop(inventory);
var bookValue = bookShop.inventoryValue();
var bookPrice = bookShop.priceForTitle('Eloquent Javascript');

// output the returned values
console.log(`The book values of the bookstore are ${bookValue}`);
console.log(`The book price for 'Eloquent Javascript' is ${bookPrice}`);

