/*
=====================================================
 CLOSURES IN TYPESCRIPT – COMPLETE GUIDE
=====================================================

A closure is created when:
1️⃣ An inner function accesses variables from its outer function.
2️⃣ The inner function is returned or passed around.
3️⃣ Even after the outer function finishes execution,
   the inner function retains access to outer variables.

Closures allow:
- Data encapsulation
- Maintaining state
- Private variables
=====================================================
*/

/* ======================================================
BASIC CLOSURE EXAMPLE
===================================================== */

function outer(): () => void {
  let count: number = 0;

  return function inner(): void {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

/*
Explanation:
- outer() executes and returns inner()
- inner() remembers the 'count' variable even after outer() finishes
- Each call to counter() increments 'count'
=====================================================
*/

/* ======================================================
DATA PRIVACY USING CLOSURE
===================================================== */

function createSecret(): () => void {
  let secret: string = "My Secret";

  return function showSecret(): void {
    console.log(secret);
  };
}

const mySecret = createSecret();

mySecret(); // "My Secret"

// console.log(secret); ❌ Error
// 'secret' cannot be accessed outside the closure

/*
Closures allow private variables that can't be accessed globally.
=====================================================
*/

/* ======================================================
BANK ACCOUNT EXAMPLE USING CLOSURE
===================================================== */

function createBankAccount(initialBalance: number) {
  let balance: number = initialBalance;

  return {
    deposit(amount: number): void {
      balance += amount;
      console.log(`Deposited: ${amount}`);
      console.log(`Current Balance: ${balance}`);
    },

    withdraw(amount: number): void {
      if (amount > balance) {
        console.log("Insufficient Balance");
        return;
      }

      balance -= amount;
      console.log(`Withdrawn: ${amount}`);
      console.log(`Current Balance: ${balance}`);
    },

    getBalance(): number {
      return balance;
    },
  };
}

const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(200);

console.log(account.getBalance());

/*
=====================================================
IMPORTANT NOTES ABOUT CLOSURES
=====================================================

✅ Every function in TypeScript/JavaScript forms a closure
   for its parent scope.

✅ Closures preserve variables even after the outer
   function has completed execution.

✅ Closures are used in:
   - React Hooks
   - Event Handlers
   - Timers
   - Authentication
   - State Management
   - Callbacks

⚠️ Excessive closures may retain memory unnecessarily
   if not managed properly.
=====================================================
*/