/*
=====================================================
       CLOSURES IN JAVASCRIPT – COMPLETE GUIDE
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
   1️⃣ BASIC CLOSURE EXAMPLE
===================================================== */
function outer() {
    let count = 0; // variable in outer function

    return function inner() { // inner function forms closure
        count++;
        console.log(count);
    };
}

const counter = outer(); // counter holds the inner function

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
   2️⃣ DATA PRIVACY USING CLOSURE
===================================================== */
function createSecret() {
    let secret = "My Secret";

    return function showSecret() {
        console.log(secret);
    };
}

const mySecret = createSecret();
mySecret(); // "My Secret"

// 'secret' is not accessible outside the closure
// console.log(secret); // ❌ ReferenceError

/*
Closures allow private variables that can't be accessed globally.
=====================================================
*/


/* ======================================================
   5️⃣ IMPORTANT NOTES ABOUT CLOSURES
=====================================================
Every function in JavaScript forms a closure
   for its parent scope.
Closures can cause memory retention if not handled properly.
=====================================================
*/

