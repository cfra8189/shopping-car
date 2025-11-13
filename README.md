The Dynamic Shopping Cart

***Keeping the USER in mind...***

The entire thing revolves around clicking the ***"Add Product" button***. That's where the magic happens. Everything else is just setting up for that moment.

---

=========HTML=========

I need:
- Input boxes for `product-name`, `product-price`, and `quantity` where the user types stuff in
- The ***Add Product button*** (`add-product`)
- An empty shopping list (`<ul>` with `id="cart"`) where new items will show up
- A ***Total Price*** display (`<span>` with `id="total-price"`)

JS

First lines of the JS file use `document.getElementById()` to grab all the HTML elements by their IDs.
- The inputs
- The button
- The list
- The total span

This makes them way easier to work with in JavaScript.

--- JS: Event Listener ---

addProductButton.addEventListener('click', ...)

Wait until the user clicks the 'Add Product' button, 
and then run this function.

This runs EVERY time the button is clicked.
=======================================================

---Gather Input---

JS

let productInput = productNameInput.value.trim();
let unitPrice = parseFloat(productPriceInput.value);
let quantity = parseInt(productQtyInput.value);
```

These are the text/numbers the user typed... Making sure price and quantity are treated as numbers, not just text.

---

Calculate

JS

const subtotal = unitPrice * quantity;

=======================================================

---Create an element with styling


const listItem = document.createElement('li');

***This is the container for the new product.***

Styling

listItem.classList = 'cart-item';

d>_<b d>_<b d>_<b d>_<b

!!!!! This is not working !!!!!!

OKAY!!!!

listItem.classList.add('cart-item');

This WORKS!!!
