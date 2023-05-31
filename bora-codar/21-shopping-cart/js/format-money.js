function formatMoney(amount) {
    return Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency",
    }).format(amount);
}
