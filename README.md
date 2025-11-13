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

=========================================================

- Store Subtotal


listItem.dataset.subtotal = subtotal;


- Build HTML


listItem.innerHTML = `
        <span> ${productInput}</span>
        <span> ${quantity} x $${unitPrice.toFixed(2)} =  <strong>$${subtotal.toFixed(2)}</strong></span>
        <button class="remove-btn">Remove</button> 
    `;

This fills the new list item with text and tags. Shows:
- Product name
- Quantity
- Unit price
- Bold subtotal
- The **Remove** button


- Display on Page

cart.appendChild(listItem);

Creates a `<li>` and sticks it inside the list (`<ul id="cart">`). 

Now I can see it on the page!

--------------------------------------------------------------------

- Update Total

updateTotalPrice(subtotal);

- This calls the separate `updateTotalPrice` function and sends it the item's subtotal. 

- This function adds the amount to `totalPrice` and updates the text on the page.

--------------------------------------------------------------------

I messed up SOMEWHERE!!! UGHHHHHHHHHHHHHH!!!!!!!


- Delete

item.remove();

- Removes the item from the screen and the shopping list.

I've attached the `removeItem` function to the new ***Remove*** button.

listItem.querySelector('.remove-btn').addEventListener('click', removeItem);

- Clean Up

productNameInput.value = '';
productPriceInput.value = '';
productQtyInput.value = ''; 

It clears the input boxes so the user can easily enter the next item.

--------------------------------------------------------------------

*********NOTES***********

Why use `.dataset` in My Shopping Cart

The `.dataset` property lets my JavaScript attach and retrieve specific data directly to the HTML item it creates, without that data being visible to the user. It keeps the math (the subtotal) and the element (`<li>`) together.

1. Storing the Subtotal (When Adding a Product)

When I click "Add Product", my JavaScript calculates the `subtotal` (Price × QTY). This number needs to be saved to the new list item.

listItem.dataset.subtotal = subtotal;

This stores the calculated subtotal value right on this specific `<li>` element.

2. Retrieving the Subtotal (When Removing a Product)

When I click "Remove", my `removeItem` function must know exactly how much to subtract from the `totalPrice`. It uses the stored value.

const subtotal = parseFloat(item.dataset.subtotal);

It looks at this `<li>` element, retrieves the stored value from its `data-subtotal` property, and converts it back to a number so I can subtract it from the Total.

