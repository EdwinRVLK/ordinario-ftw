document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const totalPriceContainer = document.getElementById('total-price');

        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p>No hay productos en tu carrito.</p>`;
            totalPriceContainer.textContent = `Total: $0`;
            return;
        }

        let totalPrice = 0;
        cart.forEach(item => {
            if (isNaN(item.price) || item.price <= 0) {
                console.error(`El precio de ${item.name} es inválido: ${item.price}`);
                return;
            }

            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <div><img src="${item.image}" alt="${item.name}" style="width: 50px; height: auto;"></div>
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            `;
            cartItemsContainer.appendChild(cartItemElement);
            totalPrice += item.price;
        });

        
        totalPriceContainer.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    
    function showPopup(message) {
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popup-message');
        popupMessage.textContent = message; // Cambia el mensaje
        popup.style.display = 'flex';
        popup.focus(); // Muestra el popup
    }

    
    function closePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none'; // Oculta el popup
    }


    document.getElementById('popup-ok').addEventListener('click', closePopup);

    document.getElementById('popup-close').addEventListener('click', closePopup);

    document.getElementById('pay-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            showPopup('No hay productos en el carrito para pagar.');
        } else {
            showPopup('Pago completado');
            localStorage.removeItem('cart'); 
            cart = []; 
            updateCart(); 
        }
    });
    
    updateCart();
});