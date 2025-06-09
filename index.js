
document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Carrito actualizado:', cart);
    console.log('localStorage.carrito:', localStorage.getItem('cart'));
    
    document.getElementById('popup-ok')?.addEventListener('click', closePopup);
    document.getElementById('popup-close')?.addEventListener('click', closePopup);
    
    window.addToCart = function(productName, price, image) {
        price = parseFloat(price);
        
        if (isNaN(price) || price <= 0) {
            showPopup(`Error: ${productName} tiene un precio inválido`);
            return;
        }
        
        const existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            showPopup(`${productName} ya está en el carrito`);
            return;
        }
        
        cart.push({ 
            name: productName, 
            price: price, 
            image: image 
        });
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
        showPopup(`${productName} agregado al carrito`);
    };
    
    function showPopup(message) {
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popup-message');
        if (popup && popupMessage) {
            popupMessage.textContent = message;
            popup.style.display = 'flex';
            popup.focus();
        }
    }
    
    function closePopup() {
        const popup = document.getElementById('popup');
        if (popup) popup.style.display = 'none';
    }
});