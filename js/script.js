const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

email.addEventListener("input", function () {

    if (email.value === "") {
        email.classList.add("input-error");
        emailError.textContent = "Email is required.";
    }
    else {
        email.classList.remove("input-error");
        emailError.textContent = "";
    }

});

confirmPassword.addEventListener("input", function () {

    if (confirmPassword.value !== password.value) {

        confirmPassword.classList.add("input-error");

        confirmPasswordError.textContent =
            "Passwords do not match.";

    }
    else {

        confirmPassword.classList.remove("input-error");

        confirmPasswordError.textContent = "";

    }

});

form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (email.value === "") {
        email.classList.add("input-error");
        emailError.textContent = "Please enter your email.";
    }

});