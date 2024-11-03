interface Account {
  idNumber: number;
  balance: number;
  checkBalance: () => number;
  replenish: (sum: number) => void;
  withdraw: (sum: number) => void;
}

class DebitAccount implements Account {
  balance: number;
  idNumber: number;

  constructor(idNumber: number) {
    this.balance = 0;
    this.idNumber = idNumber;
  }

  checkBalance(): number {
    return this.balance;
  }

  replenish(sum: number): void {
    this.balance += sum;
  }

  withdraw(sum: number): void {
    if (sum <= this.balance) {
      this.balance -= sum
    } else {
      console.log(`The maximum withdrawal amount is ${this.balance}`);
    }
  }
}


class CreditAccount implements Account {
  balance: number;
  idNumber: number;
  limit: number;

  constructor(idNumber: number, limit: number) {
    this.idNumber = idNumber;
    this.limit = limit;
    this.balance = limit;
  }

  checkBalance(): number {
    return this.balance;
  }

  replenish(sum: number): void {
    this.balance += sum;
  }

  withdraw(sum: number): void {
    if (sum <= this.balance) {
      this.balance -= sum;
    }
    else {
      console.log(`The maximum withdrawal amount is ${this.balance}`);
    }

  }

  checkDebt(): number {
    const debt = this.limit - this.balance;
    if (debt <= 0) {
      return 0
    } else {
      return debt;
    }
  }
}


const debitCard = new DebitAccount(12345);
debitCard.replenish(300);
console.log("DebitCard balance is", debitCard.checkBalance());
debitCard.withdraw(20);
console.log("DebitCard balance is", debitCard.checkBalance());
debitCard.withdraw(290);
debitCard.withdraw(280);
console.log("DebitCard balance is", debitCard.checkBalance());
debitCard.replenish(30);
console.log("DebitCard balance is", debitCard.checkBalance());


const creditCard = new CreditAccount(54321, 50000);
console.log("CreditCard balance is", creditCard.checkBalance());
creditCard.withdraw(5000);
console.log("CreditCard balance is", creditCard.checkBalance());
creditCard.replenish(20000);
console.log("CreditCard balance is", creditCard.checkBalance());
console.log("CreditCard debt is", creditCard.checkDebt());
creditCard.withdraw(25000);
console.log("CreditCard debt is", creditCard.checkDebt());
console.log("CreditCard balance is",creditCard.checkBalance());


