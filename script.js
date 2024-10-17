let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cart-count").innerText = cart.length;
  alert(`${name} added to cart!`);
}

function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(listItem);
    total += item.price;
  });

  cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Update cart count on load for cart.html
if (document.getElementById("cart-count")) {
  document.getElementById("cart-count").innerText = cart.length;
}

// Update cart items when cart.html is loaded
if (document.getElementById("cart-items")) {
  updateCart();
}
