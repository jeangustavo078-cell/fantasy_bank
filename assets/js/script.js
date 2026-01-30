//page controller
const loginSection = document.getElementById("login");
const registerSection = document.getElementById("register");
const goRegister = document.getElementById("go-register");

//login section will open first than register section
if (loginSection) {
    loginSection.classList.add("active");
}

if (goRegister) {
    goRegister.addEventListener("click", function (event) {
        event.preventDefault();

        loginSection.classList.remove("active");
        registerSection.classList.add("active");
    });
}

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

  deposit(amount) {
    if (amount <= 0 || isNaN(amount)) return false;
    this.balance += amount;

    this.save();
    return true;
  }

<<<<<<< Updated upstream
    login(inputAccountNumber, inputPassword) {
        if (
            this.accountNumber === inputAccountNumber &&
            this.password === inputPassword
        ) {
            //this saves the name and number account in a internal storage to use in dashboard
            sessionStorage.setItem("userName", this.userName);
            sessionStorage.setItem("accountNumber", this.accountNumber);

            //Switch to the dashboard when the login is successful
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid credentials");
        }
    }
=======
  withdraw(amount) {
    if (amount <= 0 || isNaN(amount)) return false;
    if (amount > this.balance) return false;
    this.balance -= amount;

    this.save();
    return true;
  }
>>>>>>> Stashed changes
}

class BankSystem {
  constructor() {
    this.accounts = [];
    this.load();
  }

  createAccount(name, password, confirmPassword) {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    let accountNumber;

    do {
      accountNumber = String(generateAccountNumber());
    } while (this.accounts.some((acc) => acc.accountNumber === accountNumber));

    const account = new BankAccount();

    account.userName = name;
    account.password = password;
    account.accountNumber = accountNumber;
    account.balance = 0;

    this.accounts.push(account);

    alert("Account created. Number: " + accountNumber);

    this.accounts.push(account);
    this.save();

    return true;
  }

  login(accountNumber, password) {
    const account = this.accounts.find(
      (acc) => acc.accountNumber === accountNumber,
    );

    if (!account) {
      alert("Conta não encontrada");
      return;
    }

    if (account.password !== password) {
      alert("Senha incorreta");
      return;
    }

    localStorage.setItem("loggedUser", account.accountNumber);
    window.location.href = "dashboard.html";
  }

  load() {
    const data = localStorage.getItem("bankAccounts");

    if (data) {
      const parsed = JSON.parse(data);

      this.accounts = parsed.map((obj) => {
        const acc = new BankAccount();
        Object.assign(acc, obj);
        return acc;
      });
    }
  }

  save() {
    localStorage.setItem(
        "bankAccounts",
        JSON.stringify(this.accounts)
    );
  }
}

const bankSystem = new BankSystem();

const submitButton = document.getElementById("submit-btn");

if (submitButton){
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        const sendAccountNumber = document.getElementById("account-number").value
        const sendPassword = document.getElementById("password").value

        bankAccount.login(sendAccountNumber, sendPassword)
    })
}

const createAccountButton = document.getElementById("createAccount-btn")

if (createAccountButton) {
    createAccountButton.addEventListener("click", function(event) {
    event.preventDefault();

    const sendName = document.getElementById("full-name").value;
    const sendNewPassword = document.getElementById("new-password").value;
    const sendConfirmPassword =
      document.getElementById("confirm-password").value;

    const created = bankSystem.createAccount(
      sendName,
      sendNewPassword,
      sendConfirmPassword,
    );

    if (created) {
      registerSection.classList.remove("active");
      loginSection.classList.add("active");
    }
});
}

const userName = sessionStorage.getItem("userName");
document.getElementById("user-name").textContent = userName;

const accountNumber = sessionStorage.getItem("accountNumber");
document.getElementById("account-number").textContent = accountNumber;