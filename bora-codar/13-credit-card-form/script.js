const cardNumberInput = document.getElementById("card-number");
const cardOwnerInput = document.getElementById("card-owner");
const expiryDateInput = document.getElementById("card-expiry-date");
const cvvInput = document.getElementById("card-cvv");

const cardNumberText = document.querySelector(".credit-card .card-number");
const cardOwnerText = document.querySelector(".credit-card .card-owner");
const expiryDateText = document.querySelector(".credit-card .card-expiry-date");

const cardNumberMask = IMask(cardNumberInput, {
    lazy: false,
    placeholderChar: "*",
    mask: "0000 0000 0000 0000",
});
IMask(expiryDateInput, {
    mask: "MM/YY",
    lazy: false,
    blocks: {
        YY: { mask: "00", placeholderChar: "a" },
        MM: {
            mask: IMask.MaskedRange,
            placeholderChar: "m",
            from: 1,
            to: 12,
        },
    },
});
IMask(cvvInput, { mask: "000" });

cardNumberInput.addEventListener("keyup", (event) => {
    cardNumberText.innerHTML = event.target.value;
});

cardOwnerInput.addEventListener("keyup", (event) => {
    cardOwnerText.innerHTML = event.target.value;
});

expiryDateInput.addEventListener("keyup", (event) => {
    expiryDateText.innerHTML = event.target.value;
});
