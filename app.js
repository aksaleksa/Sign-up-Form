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

checkPassword();