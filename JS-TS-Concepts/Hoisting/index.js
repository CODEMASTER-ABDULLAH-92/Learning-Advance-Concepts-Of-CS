// The declaration is move to the top of the current scope 

/**
 * ==========================================================
 * HOISTING IN JAVASCRIPT – COMPLETE GUIDE
 * ==========================================================
 *
 * Topics Covered:
 * 1. Execution Context (Creation + Execution Phase)
 * 2. Variable Hoisting (var, let, const)
 * 3. Temporal Dead Zone (TDZ)
 * 4. Function Hoisting
 * 5. Function Expressions
 * 6. Arrow Function Hoisting
 *
 * ==========================================================
 */


/**
 * ==========================================================
 * 1️⃣ EXECUTION CONTEXT
 * ==========================================================
 *
 * JavaScript runs code in two phases:
 *
 * 1. Creation Phase (Memory Phase)
 *    - Memory allocated for variables and functions
 *
 * 2. Execution Phase
 *    - Code runs line by line
 *
 * Hoisting happens during the Creation Phase.
 */


/* ==========================================================
   2️⃣ VAR HOISTING
   ========================================================== */

console.log(varVariable); // undefined

var varVariable = 10;

/**
 * What happens internally:
 *
 * Creation Phase:
 *    var varVariable = undefined;
 *
 * Execution Phase:
 *    console.log(undefined);
 *    varVariable = 10;
 *
 * RESULT: No error, prints undefined.
 *
 * Reason:
 * var is hoisted AND initialized with undefined.
 */


/* ==========================================================
   3️⃣ LET HOISTING
   ========================================================== */

// console.log(letVariable); // ❌ ReferenceError

let letVariable = 20;

/**
 * What happens internally:
 *
 * Creation Phase:
 *    Memory allocated for letVariable
 *    BUT NOT initialized
 *
 * From start of scope until initialization:
 *    Variable is inside the Temporal Dead Zone (TDZ)
 *
 * Accessing it before initialization → ReferenceError
 */


/* ==========================================================
   4️⃣ CONST HOISTING
   ========================================================== */

// console.log(constVariable); // ❌ ReferenceError

const constVariable = 30;

/**
 * Same behavior as let:
 *
 * - Memory allocated during creation phase
 * - Not initialized
 * - Exists inside TDZ
 *
 * Additional rule:
 * const MUST be initialized at declaration.
 */


/* ==========================================================
   5️⃣ TEMPORAL DEAD ZONE (TDZ)
   ========================================================== */

/**
 * TDZ = The time between:
 *
 * Start of scope
 *      ↓
 * Line where variable is initialized
 *
 * During this period:
 * - Variable exists
 * - But cannot be accessed
 */


/* ==========================================================
   6️⃣ FUNCTION DECLARATION HOISTING
   ========================================================== */

sayHello(); // ✅ Works

function sayHello() {
  console.log("Hello from function declaration");
}

/**
 * Creation Phase:
 * Entire function definition is stored in memory.
 *
 * That is why it can be called BEFORE declaration.
 *
 * Function Declarations are fully hoisted.
 */


/* ==========================================================
   7️⃣ FUNCTION EXPRESSION WITH VAR
   ========================================================== */

// greet(); // ❌ TypeError: greet is not a function

var greet = function () {
  console.log("Hello from function expression");
};

/**
 * What happens internally:
 *
 * Creation Phase:
 *    var greet = undefined;
 *
 * Execution Phase:
 *    greet = function() {...}
 *
 * When called before assignment:
 *    greet() → undefined()
 *    → TypeError
 */


/* ==========================================================
   8️⃣ ARROW FUNCTION WITH VAR
   ========================================================== */

// arrowFuncVar(); // ❌ TypeError

var arrowFuncVar = () => {
  console.log("Arrow function with var");
};

/**
 * Same behavior as function expression with var.
 *
 * Only variable is hoisted (initialized as undefined),
 * not the function body.
 */


/* ==========================================================
   9️⃣ ARROW FUNCTION WITH LET / CONST
   ========================================================== */

// arrowFuncLet();   // ❌ ReferenceError
// arrowFuncConst(); // ❌ ReferenceError

let arrowFuncLet = () => {
  console.log("Arrow function with let");
};

const arrowFuncConst = () => {
  console.log("Arrow function with const");
};

/**
 * Creation Phase:
 * Memory allocated
 * Not initialized (TDZ)
 *
 * Calling before initialization:
 * → ReferenceError
 */


/* ==========================================================
   🔟 FINAL SUMMARY TABLE
   ========================================================== */

/**
 * VARIABLES
 * --------------------------------------------
 * var   → Hoisted + initialized (undefined)
 * let   → Hoisted + NOT initialized (TDZ)
 * const → Hoisted + NOT initialized (TDZ)
 *
 *
 * FUNCTIONS
 * --------------------------------------------
 * Function Declaration → Fully hoisted
 * Function Expression  → Depends on variable type
 * Arrow Function       → Depends on variable type
 *
 *
 * KEY RULE:
 * Hoisting is about memory allocation,
 * NOT physical movement of code.
 *
 * ==========================================================
 */