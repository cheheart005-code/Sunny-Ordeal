const registrationForm = document.getElementById("registrationForm")
const loginForm = document.getElementById("loginForm")


// REGISTRATION VALIDATION

if (registrationForm) {

    const fullname = document.getElementById("fullname");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    const fullnameError = document.getElementById("fullnameError");
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");


    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Clear previous errors
        fullnameError.textContent = "";
        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        let valid = true;


        // Full Name
        if (fullname.value.trim() === "") {
            fullnameError.textContent = "Please enter your full name.";
            valid = false;
        }


        // Username
        if (username.value.trim() === "") {
            usernameError.textContent = "Please enter your username.";
            valid = false;
        }


        // Email
        if (email.value.trim() === "") {
            emailError.textContent = "Please enter your email.";
            valid = false;
        }


        // Password
        if (password.value.trim() === "") {
            passwordError.textContent = "Please enter a password.";
            valid = false;
        }


        // Confirm Password
        if (confirmPassword.value.trim() === "") {
            confirmPasswordError.textContent = "Please confirm your password.";
            valid = false;
        }


        // Password matching
        if (
            password.value.trim() !== "" &&
            confirmPassword.value.trim() !== "" &&
            password.value !== confirmPassword.value
        ) {
            confirmPasswordError.textContent = "Passwords do not match.";
            valid = false;
        }


        if (valid) {
            alert("Registration successful!");
        }

    });

}


//LOGIN VALIDATION

if (loginForm) {

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        usernameError.textContent = "";
        passwordError.textContent = "";

        let valid = true;

        if (username.value.trim() === "") {
            usernameError.textContent = "Please enter your username.";
            valid = false;
        }

        if (password.value.trim() === "") {
            passwordError.textContent = "Please enter your password.";
            valid = false;
        }

        if (valid) {
            alert("Login validation successful!");
        }

    });

}

// FAVOURITES

let favourites = [];

function toggleFavourite(button, productName) {

    if (favourites.includes(productName)) {

        // Remove from favourites
        favourites = favourites.filter(function (item) {
            return item !== productName;
        });

        button.classList.remove("favourited");

    } else {

        // Add to favourites
        favourites.push(productName);

        button.classList.add("favourited");
    }

    console.log("Favourites:", favourites);
}

// SEARCH / FILTER

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".place-card");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.toLowerCase();

        cards.forEach(function (card) {

            const destinationName =
                card.querySelector("h3").textContent.toLowerCase();

            if (destinationName.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}