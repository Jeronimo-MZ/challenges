const togglePasswordButton = document.querySelector(".toggle-password");
const togglePasswordButtonImg = togglePasswordButton.querySelector("img");
const passwordInput = document.querySelector('input[name="password"]');

togglePasswordButton.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordButtonImg.src = "assets/eye.svg";
    } else {
        passwordInput.type = "password";
        togglePasswordButtonImg.src = "assets/eye-off.svg";
    }
});
