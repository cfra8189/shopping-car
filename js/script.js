const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

addProductButton.addEventListener('click', () => {
  let productInput = productNameInput.value.trim();
  let unitPrice = parseFloat(productPriceInput.value);
  let quantity = parseInt(productQtyInput.value);

  const subtotal = unitPrice * quantity;


  const listItem = document.createElement('li');
  listItem.classList.add('cart-item');

    listItem.dataset.subtotal = subtotal; 

  
    listItem.innerHTML = `
        <span> ${productInput}</span>
        <span> ${quantity} x $${unitPrice.toFixed(2)} =  
        <strong>$${subtotal.toFixed(2)}</strong></span>
        <button class="remove-btn">Remove</button> 
    `;

cart.appendChild(listItem);

updateTotalPrice(subtotal);

});