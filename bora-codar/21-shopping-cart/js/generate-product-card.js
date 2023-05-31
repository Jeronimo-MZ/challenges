function generateProductCard(cartItem) {
    return `
    <div class="product-card">
        <img
            src="${cartItem.image}"
            alt="${cartItem.name}"
        />
        <div class="info">
            <p>
                ${cartItem.name}
            </p>
            <div class="bottom">
                <span>${formatMoney(cartItem.price * cartItem.quantity)}</span>
                <div class="controls">
                    <button title="decrease quantity" class="btn-decrease">
                        <img src="assets/icons/Minus.svg"  alt="" onclick="decreaseQuantity(${
                            cartItem.id
                        })" />
                    </button>
                    <span>${cartItem.quantity}</span>
                    <button title="increase quantity" class="btn-increase">
                        <img src="assets/icons/Plus.svg"  alt="" onclick="increaseQuantity(${
                            cartItem.id
                        })" />
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
}
