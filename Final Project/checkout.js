// Select all the "Buy Now" buttons
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = this.getAttribute('data-price');

        // Redirect to the checkout page with product details (could also use a query string or session storage)
        localStorage.setItem('productName', productName);
        localStorage.setItem('productPrice', productPrice);

        window.location.href = 'checkout.html';
    });
});
