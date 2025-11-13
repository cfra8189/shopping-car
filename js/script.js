const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const productQtyInput = document.getElementById('quantity');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

function removeItem(event) {
  const item = event.target.closest('li');
  const subtotal = parseFloat(item.dataset.subtotal);
  updateTotalPrice(-subtotal);
  item.remove();
}

addProductButton.addEventListener('click', () => {
  let productInput = productNameInput.value.trim();
  let unitPrice = parseFloat(productPriceInput.value);
  let quantity = parseInt(productQtyInput.value);


  if (productInput === '' || isNaN(unitPrice) || unitPrice <= 0 || isNaN(quantity) || quantity <= 0) {
    alert('WHOAAAA! Enter a valid product name, unit price, and quantity [must be 1 or more].');
    return;
  }


  const subtotal = unitPrice * quantity;


  const listItem = document.createElement('li');
  listItem.classList.add('cart-item');

  listItem.dataset.subtotal = subtotal;


  listItem.innerHTML = `
        <span>${productInput}</span>
        <span>
            ${quantity} x $${unitPrice.toFixed(2)} = 
            <strong>$${subtotal.toFixed(2)}</strong>
        </span>
        <button class="remove-btn">Remove</button> 
    `;

  cart.appendChild(listItem);


  updateTotalPrice(subtotal);
  productNameInput.value = '';
  productPriceInput.value = '';
  productQtyInput.value = '';


  listItem.querySelector('.remove-btn').addEventListener('click', removeItem);
});