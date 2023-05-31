function renderCart() {
    const productList = document.querySelector(".cart-products");
    productList.innerHTML = "";
    let total = 0;
    let count = 0;
    for (const cartItem of cartItems) {
        productList.innerHTML += generateProductCard(cartItem);
        total += cartItem.price * cartItem.quantity;
        count += cartItem.quantity > 0 ? 1 : 0;
    }
    document.querySelector("#cart-quantity").innerHTML = `${count} itens`;
    document.querySelector("#cart-total").innerHTML = formatMoney(total);
}

renderCart();
