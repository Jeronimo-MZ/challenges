var cardNumberInput = document.getElementById("card-number");
var expiryDateInput = document.getElementById("card-expiry-date");
var cvvInput = document.getElementById("card-cvv");

IMask(cardNumberInput, { mask: "0000 0000 0000 0000" });
IMask(expiryDateInput, {
    mask: "MM/YY",
    blocks: {
        YY: { mask: "00" },
        MM: { mask: IMask.MaskedRange, from: 1, to: 12 },
    },
});
IMask(cvvInput, { mask: "000" });
