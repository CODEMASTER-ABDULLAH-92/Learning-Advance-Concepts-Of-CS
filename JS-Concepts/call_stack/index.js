/**
 * ==========================================================
 * CALL STACK IN JAVASCRIPT – COMPLETE GUIDE
 * ==========================================================
 *
 * The Call Stack is a data structure (Stack).
 *
 * Stack Rule:
 *      LIFO → Last In, First Out
 *
 * That means:
 * - The last function added to the stack
 * - Is the first one to be removed
 *
 * ==========================================================
 */


/* ==========================================================
   1️⃣ BASIC EXAMPLE
   ========================================================== */

function D() {
    console.log("D");
}

function C() {
    console.log("C");
    D();
}

function B() {
    console.log("B");
    C();
}

function A() {
    console.log("A");
    B();
}

A();


/**
 * ==========================================================
 * STEP-BY-STEP CALL STACK EXECUTION
 * ==========================================================
 *
 * When the file starts running:
 *
 * Step 0:
 * Global Execution Context (GEC) is created
 * and pushed into the Call Stack.
 *
 * ----------------------------------------------------------
 *
 * Step 1:
 * A() is called
 *
 * Stack:
 * [ Global ]
 * [ A ]
 *
 * ----------------------------------------------------------
 *
 * Step 2:
 * Inside A → console.log("A")
 * Prints: A
 *
 * Then B() is called
 *
 * Stack:
 * [ Global ]
 * [ A ]
 * [ B ]
 *
 * ----------------------------------------------------------
 *
 * Step 3:
 * Inside B → console.log("B")
 * Prints: B
 *
 * Then C() is called
 *
 * Stack:
 * [ Global ]
 * [ A ]
 * [ B ]
 * [ C ]
 *
 * ----------------------------------------------------------
 *
 * Step 4:
 * Inside C → console.log("C")
 * Prints: C
 *
 * Then D() is called
 *
 * Stack:
 * [ Global ]
 * [ A ]
 * [ B ]
 * [ C ]
 * [ D ]
 *
 * ----------------------------------------------------------
 *
 * Step 5:
 * Inside D → console.log("D")
 * Prints: D
 *
 * D finishes execution
 * D is removed from stack
 *
 * Stack:
 * [ Global ]
 * [ A ]
 * [ B ]
 * [ C ]
 *
 * ----------------------------------------------------------
 *
 * Now C has no more code
 * C is removed
 *
 * Stack:
 * [ Global ]
 * [ A ]
 * [ B ]
 *
 * ----------------------------------------------------------
 *
 * B finishes → removed
 *
 * Stack:
 * [ Global ]
 * [ A ]
 *
 * ----------------------------------------------------------
 *
 * A finishes → removed
 *
 * Stack:
 * [ Global ]
 *
 * ----------------------------------------------------------
 *
 * Global Execution Context finishes → stack becomes empty.
 *
 * ==========================================================
 */


/**
 * ==========================================================
 * FINAL OUTPUT
 * ==========================================================
 *
 * A
 * B
 * C
 * D
 *
 * Even though D runs last,
 * it is removed FIRST from the stack.
 *
 * That is LIFO behavior.
 *
 * ==========================================================
 */


/**
 * ==========================================================
 * IMPORTANT CONCEPTS ABOUT CALL STACK
 * ==========================================================
 *
 * 1️⃣ JavaScript is Single-Threaded
 *    - Only one Call Stack
 *    - Executes one thing at a time
 *
 * 2️⃣ Each function call creates a new Execution Context
 *    - Local variables stored separately
 *
 * 3️⃣ If stack grows too large → Stack Overflow
 *
 * Example:
 *
 * function infinite() {
 *     infinite();
 * }
 *
 * infinite();
 *
 * This causes:
 * RangeError: Maximum call stack size exceeded
 *
 * Because stack keeps growing without being cleared.
 *
 * ==========================================================
 */


/**
 * ==========================================================
 * RELATION WITH EVENT LOOP
 * ==========================================================
 *
 * The Event Loop checks:
 * "Is Call Stack empty?"
 *
 * If yes:
 *   It pushes async callbacks into the stack.
 *
 * So:
 * Call Stack is the core execution engine.
 *
 * ==========================================================
 */