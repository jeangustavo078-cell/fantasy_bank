//page controller
const loginSection = document.getElementById("login");
const registerSection = document.getElementById("register");
const goRegister = document.getElementById("go-register");

//login section will open first than register section
loginSection.classList.add("active");

goRegister.addEventListener("click", function (event) {
    event.preventDefault();

    loginSection.classList.remove("active");
    registerSection.classList.add("active");
});

//creates a random account number for new users
function generateAccountNumber() {
    const min = 1000000;
    const max = 9999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class BankAccount {
    constructor() {
        this.accountNumber = null;
        this.password = null;
        this.balance = 0;
        this.userName = null;
    }

    createAccount(name, password, confirmPassword) {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return false;
        } else {
            this.userName = name;
            this.password = password;
            this.accountNumber = String(generateAccountNumber());
            this.balance = 0;

            alert("Account created. Number: " + this.accountNumber);
            return true;
        }
    }

    login(inputAccountNumber, inputPassword) {
        if (
            this.accountNumber === inputAccountNumber &&
            this.password === inputPassword
        ) {
            alert("Login successful");
        } else {
            alert("Invalid credentials");
        }
    }
}

const bankAccount = new BankAccount();

const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    const sendAccountNumber = document.getElementById("account-number").value
    const sendPassword = document.getElementById("password").value

    bankAccount.login(sendAccountNumber, sendPassword)
})

const createAccountButton = document.getElementById("createAccount-btn")

createAccountButton.addEventListener("click", function(event) {
    event.preventDefault();

    const sendName = document.getElementById("full-name").value;
    const sendNewPassword = document.getElementById("new-password").value;
    const sendConfirmPassword = document.getElementById("confirm-password").value;

    const created = bankAccount.createAccount(
        sendName,
        sendNewPassword,
        sendConfirmPassword
    );

    if (created) {
        registerSection.classList.remove("active");
        loginSection.classList.add("active");
    }
});