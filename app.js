const form = document.querySelector("#form");
const firstName = document.querySelector("#first_name");
const submitButton = document.querySelector("#submit-button");
let password = document.querySelector("#pwd");
let confirmPassword = document.querySelector("#confirm_pwd");
let passwordMessage = document.querySelector("#pwd_message");

let first = "";
let second = "";

function checkPassword() {
    password.addEventListener("change", () => {
        first = password.value;
        if (first !== "" && first !== second) {
            passwordMessage.textContent = "*Passwords do not match"
        }
        else {
            passwordMessage.textContent = "";
        }
    })
    confirmPassword.addEventListener("change", () => {
        second = confirmPassword.value;
        if (first !== "" && first !== second) {
            passwordMessage.textContent = "*Passwords do not match"
        }
        else {
            passwordMessage.textContent = "";
        }
    })
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if ((first) && (first === second)) {
        alert(`Hey ${firstName.value}, thanks for signing up. Check your inbox soon for our email.`);
    }
})

checkPassword();