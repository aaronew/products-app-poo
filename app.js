class Product {
  constructor(name, price, barcode) {
    this.name = name;
    this.price = price;
    this.barcode = barcode;
  }
};

class UI {
  addProduct() {

  }

  deleteProduct() {

  }

  showMessage() {

  }

};

// DOM Events
const getProductForm = document.getElementById('product-form');

getProductForm
  .addEventListener('submit', (event) => {

    const name = document.getElementById('name').value,
      price = document.getElementById('price').value,
      barcode = document.getElementById('barcode').value;

      console.log(name, price, barcode);

    event.preventDefault();
  });