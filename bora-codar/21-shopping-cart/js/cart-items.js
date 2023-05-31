const cartItems = [
    {
        id: 1,
        name: "Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD",
        image: "assets/img/product-image-monitor.jpg",
        price: 8599,
        quantity: 1,
    },
    {
        id: 2,
        name: "Cadeira Gamer  RGB - Preta com Iluminação (Led)",
        image: "assets/img/product-image-cadeira.jpg",
        price: 959.9,
        quantity: 1,
    },
    {
        id: 3,
        name: "Teclado Gamer Mecânico Low Profile RGB AW510K 580",
        image: "assets/img/product-image-teclado.jpg",
        price: 1002.9,
        quantity: 1,
    },
    {
        id: 4,
        name: "Headset Gamer RGB Preto",
        image: "assets/img/product-image-headset.jpg",
        price: 99.9,
        quantity: 1,
    },
    {
        id: 5,
        name: "Patinho De Borracha Para Banho",
        image: "assets/img/product-image-patinho.jpg",
        price: 19.9,
        quantity: 1,
    },
];

function increaseQuantity(productId) {
    cartItems.find((p) => p.id === productId).quantity++;
    renderCart();
}

function decreaseQuantity(productId) {
    const item = cartItems.find((p) => p.id === productId);
    if (item.quantity < 1) return;
    item.quantity--;
    renderCart();
}
