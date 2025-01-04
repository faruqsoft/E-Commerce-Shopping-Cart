// Initialize an empty cart
let cart = [];

// Elements
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

// Event listeners for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
console.log(addToCartButtons);
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.getAttribute('data-product');
        const productName = e.target.getAttribute('data-name');
        const productPrice = parseFloat(e.target.getAttribute('data-price'));

        // Add product to cart
        addToCart(productId, productName, productPrice);
    });
});

// Function to add a product to the cart
function addToCart(id, name, price) {
    const existingProduct = cart.find(product => product.id === id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    updateCart();
}

// Function to update the cart display and total
function updateCart() {
    // Update cart count
    cartCount.textContent = cart.length;

    // Update cart items
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(product => {
        total += product.price * product.quantity;

        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price} x ${product.quantity}`;
        cartItems.appendChild(li);
    });

    totalPrice.textContent = total.toFixed(2);
}

// Event listener for viewing the cart
document.getElementById('view-cart').addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

// Event listener for closing the cart modal
document.getElementById('close-cart').addEventListener('click', () => {
    cartModal.style.display = 'none';
});
