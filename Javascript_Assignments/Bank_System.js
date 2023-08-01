var isLoggedIn = false;
var userID = null;

var bank = {
    "Bank Name": "Bank of Refocus",
    Adress: "Imus Cavite",
    bankMoney: 0,
    Accounts : [
        {
            name: "Shem Aspa",
            age: 18,
            Balance: 0,
            adress: "Imus Cavite",
            username: "Shemaspa0",
            password: "shem14344",
        },
        {
            name: "Gian Mapa",
            age: 18,
            Balance: 0,
            adress: "Imus Cavite",
            username: "GianMApa0",
            password: "gian14344",
        },
        {
            name: "Erwin Lacsamana",
            age: 40,
            Balance: 0,
            adress: "Imus Cavite",
            username: "Erwa0",
            password: "Erwin123456",
        },
    ],
    checkBankBalance: function(){
        console.log("The bank balance is: ₱"+ this.bankMoney )
    },
    DepositBankMoney: function(amount){
        this.bankMoney += amount; // this.bankMoney  = amount + this.bankMoney
        console.log("Adds: ₱" + amount.toFixed(2) + " to the VAULT!");
    },
    WithdrawBankMoney: function(amount){
        if(amount <= this.bankMoney){
            this.bankMoney -= amount;
            console.log("Minus: ₱" + amount.toFixed(2) + " to the VAULT!");
        }
       else{
        console.log("Sorry Insuficient balance");
       }
    },

}


function BankControl(callback, data){
    callback(data)
}


function AccountControl(){


// LOG IN COODEEEE
function logInUser(username, password){
    bank.Accounts.forEach((element, index) => {

        if(element.username  == username  && element.password == password){
        isLoggedIn = true;
        userID = index;
        console.log("Hi " + element.name + " " + element.username );
        }
    });

        if(!isLoggedIn){
        userID = null;
        console.log("invalid account");
        };

};
// DEPOSIT COOODEEEE
function deposit(amount) {
    if (isLoggedIn === true) {
        bank.Accounts[userID].Balance += amount;
        bank.DepositBankMoney(amount)
        console.log("You deposited: " + amount.toFixed(2) + " to your account");
    } else {
        showError("Please log in");
    }
}
// CHECKING BALANCE COODEEE
function checkBalance(){
    if(isLoggedIn){
        console.log("Your account Balance is: "+ bank.Accounts[userID].Balance.toFixed(2) + ".")
    }
    else{
        showError("please log in")
    }
}
// WITHDRAWW CODEEE
function withdraw(amount){
    if(isLoggedIn){
        if(amount > 0){
            if(bank.Accounts[userID].Balance >= amount){
                bank.Accounts[userID].Balance -= amount;
                bank.WithdrawBankMoney(amount);
                console.log("You withdraw: " + amount.toFixed(2) + " to your account")
               } 
               else{
                console.log("Something went wrong")
               }
        }
        else{
            console.log("insuficient balance to execute withdrawal")
        }
    }
    else{
        showError("please log in") 
    }

}

// SHOW ERROR FUNCTION
function showError(msg){
    console.error(msg);
}

return{
  logInUser,
  deposit,
  checkBalance,
  withdraw,
 
}
}





// ADD ACCOUNTT
function Addacc(info){
    bank.Accounts.push(info)
    console.log(info.name + " has been added")
}

BankControl(Addacc, {
    name: "Luke Aspa",
    age: 7,
    Balance: 0,
    adress: "Imus Cavite",
    username: "Lukeaspa0",
    password: "luke14344",
})


// REMOVE ACCOUNT
function removeAcc(id){
    isLoggedIn = false
    userID = null
    console.log(bank.Accounts[id].name + " " + bank.Accounts[id].age + " has been deleted");
    bank.Accounts.splice(id, 1)
}



var gian = AccountControl()
gian.logInUser("GianMApa0","gian14344")
gian.deposit(500)
gian.deposit(800)
gian.withdraw(440)
gian.checkBalance();

console.log("-----------------------------")

var shem = AccountControl()
shem.logInUser("Shemaspa0", "shem14344");
shem.deposit(2500)
shem.deposit(4000)
shem.withdraw(-500)
shem.checkBalance();

console.log("-----------------------------")

bank.checkBankBalance()

console.log("-----------------------------")

var luke = AccountControl()
luke.logInUser("Lukeaspa0", "luke14344")
luke.deposit(10000)
luke.withdraw(1000)
luke.checkBalance()

console.log("-----------------------------")

BankControl(removeAcc, 1)

var erwin = AccountControl()
erwin.logInUser("Erwa0", "Erwin123456")



// object.DepositBankMoney(1290);
// object.DepositBankMoney(500);
// object.WithdrawBankMoney(600);
// object.WithdrawBankMoney(-600);
// object.WithdrawBankMoney(-600);
// object.WithdrawBankMoney(-10);
