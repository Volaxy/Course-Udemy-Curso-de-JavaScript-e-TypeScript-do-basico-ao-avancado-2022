function Account(agency, number, balance) {
    this.agency = agency;
    this.number = number;
    this.balance = balance;
}

Account.prototype.withdraw = function(value) {
    if(this.balance < value) {
        console.log("Insufficient funds!");
        return;
    }
    
    this.balance -= value;
    this.getBalance();
};
Account.prototype.deposit = function(value) {
    this.balance += value;

    this.getBalance();
};
Account.prototype.getBalance = function() {
    console.log(`Ag. / Number: ${this.agency} / ${this.number}, Balance: R$ ${this.balance}`);
};

// Tests
let acc1 = new Account(11, 22, 10);
console.log(acc1);

acc1.deposit(11);
console.log(acc1);

acc1.withdraw(21);
acc1.withdraw(0.01);



// Checking Account
function CheckingAccount(agency, number, balance, limit) {
    Account.call(this, agency, number, balance);
    this.limit = limit;
}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdraw = function(value) {
    if((this.balance + this.limit) < value) {
        console.log("Insufficient funds!");
        return;
    }
    
    this.balance -= value;
    this.getBalance();
};

let cc1 = new CheckingAccount(11, 22, 0, 100);

cc1.deposit(20);
cc1.withdraw(110);
cc1.withdraw(10);
cc1.withdraw(10);



// Saving Account
function SavingAccount(agency, number, balance) {
    Account.call(this, agency, number, balance);
}

SavingAccount.prototype = Object.create(Account.prototype);
SavingAccount.prototype.constructor = SavingAccount;

let sa1 = new SavingAccount(11, 22, 0);

sa1.deposit(20);
sa1.withdraw(110);
sa1.withdraw(10);
sa1.withdraw(10);