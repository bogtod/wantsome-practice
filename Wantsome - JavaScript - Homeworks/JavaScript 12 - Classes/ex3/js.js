//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa iba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu

class Account {
    constructor(location, name) {
        this.location = location;
        this.name = name;
    };
};

class Transaction {
    constructor(iba, sender, bank, amount, reference) {
        this.iba = iba;
        this.sender = sender;
        this.bank = bank;
        this.amount = amount;
        this.reference = reference;
    };
    get finalSum() {
        return this.amount - 10;
    };
};

class Table {
    transactions = [];
    addTransaction(...arr) {
        this.transactions.push(...arr);
    };
};

let bankAccount = new Account('iasi', 'Bogdan');
let transaction1 = new Transaction('iba', 'Trump', 'ING', 3500, '09988766');
let transaction2 = new Transaction('iba', 'Dragnea', 'BT', 12000, '09912766');
let transaction3 = new Transaction('iba', 'Mama', 'Raiffeisen', 500, '45688766');

let table = new Table();
table.addTransaction(transaction1, transaction2, transaction3);


console.log(table.transactions);

// const bankAccount = ...;
// const transaction1 = ...;
// const transaction2 = ...;
// const table = ...;
// table.addTransaction(...)
// console.log(table)