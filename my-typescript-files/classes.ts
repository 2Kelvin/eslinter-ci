class BankAccount {
  constructor(
    public owner: string,
    private _balance: number,
    public readonly accountNumber: string,
  ) {
    // No manual assignments (this.owner = owner) needed!
  }

  public deposit(amount: number): number {
    this._balance += amount;
    return this._balance;
  }
}

// Create the "account" object using the blueprint
const mySavings = new BankAccount("Alice", 500, "ABC-123");

// Use a method to change the state
mySavings.deposit(150);

console.log(`${mySavings.owner}'s}`);
