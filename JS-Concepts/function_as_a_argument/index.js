/**
 * ==========================================================
 * HIGHER-ORDER FUNCTIONS IN JAVASCRIPT
 * ==========================================================
 *
 * A Higher-Order Function is:
 * - A function that takes another function as a parameter
 * - OR returns a function
 *
 * In this file, we demonstrate:
 * 1. Passing a function as an argument
 * 2. Executing the passed function
 * 3. Clean formatting and best practices
 *
 * ==========================================================
 */


/* ==========================================================
   1️⃣ FUNCTION DECLARATION (Normal Function)
   ========================================================== */

function greet() {
    console.log("Hello");
}


/* ==========================================================
   2️⃣ HIGHER-ORDER FUNCTION
   ========================================================== */

function greetMe(greetFunction, fullName) {

    /**
     * greetFunction:
     * This parameter receives a function reference.
     * It is NOT executed automatically.
     */

    greetFunction(); // Execute the passed function

    console.log(`Welcome, ${fullName}!`);
}


/* ==========================================================
   3️⃣ FUNCTION CALL
   ========================================================== */

/**
 * Here we pass:
 * - greet (function reference, NOT greet())
 * - A string as the full name
 */

greetMe(greet, "Muhammad Abdullah");


/* ==========================================================
   4️⃣ EXPECTED OUTPUT
   ==========================================================
 *
 * Hello
 * Welcome, Muhammad Abdullah!
 *
 * ==========================================================
 */


/* ==========================================================
   5️⃣ IMPORTANT CONCEPTS
   ==========================================================
 *
 * 1️⃣ Difference Between:
 *
 *    greet     → Passing function reference
 *    greet()   → Calling the function immediately
 *
 *
 * 2️⃣ Why This Works:
 *
 *    - Functions in JavaScript are first-class citizens.
 *    - They can be:
 *        ✔ Stored in variables
 *        ✔ Passed as arguments
 *        ✔ Returned from other functions


/* ==========================================================
   6️⃣ MODERN ARROW FUNCTION VERSION
   ========================================================== */

const greetArrow = () => {
    console.log("Hello (Arrow Function)");
};

const greetMeArrow = (greetFunction, fullName) => {
    greetFunction();
    console.log(`Welcome, ${fullName}!`);
};

// Example usage:
greetMeArrow(greetArrow, "Muhammad Abdullah");