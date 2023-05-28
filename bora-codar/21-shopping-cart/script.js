const product = `
<div class="product-card">
                    <img
                        src="assets/img/product-image-monitor.jpg"
                        alt="Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD"
                    />
                    <div class="info">
                        <p>
                            Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e
                            DisplayPort, HDR 1000, FreeSync Premium, Ajuste de
                            Altura - LC49G95TSSLXZD
                        </p>
                        <div class="bottom">
                            <span>R$ 8.599,00</span>
                            <div class="controls">
                                <button>
                                    <img src="assets/icons/Minus.svg" alt="" />
                                </button>
                                <span>1</span>
                                <button>
                                    <img src="assets/icons/Plus.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
`;

const products = document.querySelector(".cart-products");
products.innerHTML = "";
for (let i = 0; i < 20; i++) {
    products.innerHTML += product;
}
