/**
 * ==========================================================
 * ARROW FUNCTION – BASIC EXAMPLE
 * ==========================================================
 *
 * Arrow functions were introduced in ES6.
 * They provide a shorter syntax for writing functions.
 *
 * Syntax:
 *     const functionName = (parameters) => { ... }
 *
 * ==========================================================
 */


/* ==========================================================
   1️⃣ ARROW FUNCTION DECLARATION
   ========================================================== */

let greet = () => {
    console.log("Hello, My name is Abdullah");
};


/* ==========================================================
   2️⃣ FUNCTION CALL
   ========================================================== */

greet();


/* ==========================================================
   3️⃣ EXPECTED OUTPUT
   ==========================================================
 *
 * Hello, My name is Abdullah
 *
 * ==========================================================
 */


/* ==========================================================
   4️⃣ WHAT HAPPENS INTERNALLY
   ==========================================================
 *
 * Creation Phase:
 * - Memory is allocated for variable 'greet'
 * - Because it is declared using 'let'
 * - It remains inside the Temporal Dead Zone (TDZ)
 *   until this line is executed.
 *
 * Execution Phase:
 * - Arrow function is assigned to 'greet'
 * - When greet() is called,
 *   a new execution context is created
 *   and pushed to the Call Stack.
 *
 * After execution:
 * - The function is removed from the Call Stack.
 *
 * ==========================================================
 */


/* ==========================================================
   5️⃣ IMPORTANT NOTES
   ==========================================================
 *
 * 1️⃣ Arrow functions are NOT hoisted like
 *     function declarations.
 *
 *     This would cause an error:
 *
 *     greet();  // ❌ ReferenceError
 *     let greet = () => { ... }
 *
 *
 * 2️⃣ Arrow functions are stored in variables.
 *     Their hoisting behavior depends on:
 *
 *     var   → initialized as undefined
 *     let   → TDZ (ReferenceError before initialization)
 *     const → TDZ (ReferenceError before initialization)
 *
 *
 * 3️⃣ Arrow functions do NOT have their own 'this'.
 *     They inherit 'this' from the surrounding scope.
 *
 * ==========================================================
 */


/* ==========================================================
   6️⃣ SHORTER SYNTAX (Implicit Return Example)
   ==========================================================
 */

const sayHi = () => console.log("Hi!");

sayHi();