class Product {
  constructor(name, price, barcode) {
    this.name = name;
    this.price = price;
    this.barcode = barcode;
  }
};

class UI {
  addProduct(product) {
    const productList = document.getElementById('product-list');
    const element = document.createElement('div');

    element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
          <strong>Product</strong>: ${product.name}
          <strong>Price</strong>: ${product.price}
          <strong>BarCode</strong>: ${product.barcode}
        </div>
      </div>
    `;

    productList.appendChild(element);
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

    const product = new Product(name, price, barcode);
    const ui = new UI();
    ui.addProduct(product);

    event.preventDefault();
  });