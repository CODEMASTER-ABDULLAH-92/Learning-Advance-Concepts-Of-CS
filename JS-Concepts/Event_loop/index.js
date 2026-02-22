/**
 * ==========================================================
 * EVENT LOOP – STEP BY STEP EXECUTION EXAMPLE
 * ==========================================================
 *
 * This file demonstrates how the JavaScript Event Loop works.
 *
 * Concepts Covered:
 * 1. Call Stack
 * 2. Web APIs (Browser Environment)
 * 3. Task Queue (Callback Queue)
 * 4. Event Loop
 *
 * 
 * Execution Flow:
 * - Synchronous code runs first.
 * - Asynchronous code is delegated to Web APIs.
 * - Completed async callbacks go to the Task Queue.
 * - Event Loop moves them to the Call Stack when empty.
 * ==========================================================
 */

/**
 * ===========================
 * EXECUTION ORDER EXPLANATION
 * ===========================
 *
 * 1. console.log("Hi")
 *    → Call Stack → Executes → Removed
 *
 * 2. setTimeout(...)
 *    → Call Stack → Delegated to Web APIs → Timer starts
 *    → Removed from Call Stack
 *
 * 3. console.log("End")
 *    → Call Stack → Executes → Removed
 *
 * At this point:
 * Call Stack is EMPTY.
 *
 * After 5 seconds:
 * - Timer finishes in Web APIs
 * - Callback function moves to Task Queue
 *
 * Event Loop:
 * - Checks if Call Stack is empty
 * - If empty → Moves callback to Call Stack
 * - Executes callback
 *
 * Final Output:
 *
 * Hi
 * End
 * (after 5 seconds)
 * Timeout Done
 *
 * ===========================
 * KEY RULE:
 * The Event Loop runs continuously.
 * It only moves a callback into the Call Stack
 * when the Call Stack becomes EMPTY.
 * ===========================
*/

// ===========================
// Final Correct Conclusion 
// ===========================

// JavaScript executes synchronous code using the Call Stack.
// When it encounters setTimeout, it delegates it to the browser’s Web APIs and removes it from the Call Stack.
// The remaining synchronous code executes normally.
// After the timer completes, the callback is placed in the Callback Queue.
// The Event Loop continuously checks whether the Call Stack is empty.
// When it becomes empty, the Event Loop moves the callback from the Queue into the Call Stack for execution.

console.log("Start");

const hi = ()=>{
    console.log("Hi, Abdullah");
}
setTimeout(hi, 5000)
console.log("End ");

// ===========================
// Output 
// ===========================

// Start
// End 
// Hi, Abdullah