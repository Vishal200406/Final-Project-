// Shopping Cart Logic
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add product to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = this.getAttribute('data-price');
        
        // Create an object for the product
        const product = {
            name: productName,
            price: parseFloat(productPrice),
            quantity: 1
        };
        
        
        
        // Check if the product is already in the cart
        let existingProduct = cart.find(item => item.name === productName);
        
        if (existingProduct) {
            // If product exists, increase quantity
            existingProduct.quantity++;
        } else {
            // Add new product to the cart
            cart.push(product);
        }

        // Save the cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Optional: Show some confirmation to the user (like a message or a modal)
        alert(`${productName} added to cart`);
    });
});

// Show cart modal when user clicks 'View Cart'
document.getElementById('viewCart').addEventListener('click', function() {
    window.location.href = 'checkout.html';
});
