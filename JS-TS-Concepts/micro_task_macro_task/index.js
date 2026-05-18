/*
========================================
  Microtasks vs Macrotasks in JavaScript
========================================

1) Call Stack
2) Macrotask Queue
3) Microtask Queue

Important Rule:
When the Call Stack becomes empty:
→ All Microtasks run first
→ Then ONE Macrotask runs
→ Repeat

----------------------------------------
*/

// 1️⃣ Synchronous Code (Call Stack)
console.log("Start of Script");

/*
----------------------------------------
2️⃣ Macrotask Example
----------------------------------------
setTimeout is handled by Web APIs (Browser)
After the timer completes,
its callback goes to the Macrotask Queue
*/
setTimeout(() => {
    console.log("5️⃣ Macrotask: setTimeout callback");
}, 0);


/*
----------------------------------------
3️⃣ Microtask Example (Promise)
----------------------------------------
Promise callbacks go to the Microtask Queue
Microtasks have HIGHER priority
*/
Promise.resolve().then(() => {
    console.log("3️⃣ Microtask: Promise.then");
});


/*
----------------------------------------
4️⃣ Another Microtask
----------------------------------------
*/
queueMicrotask(() => {
    console.log("4️⃣ Microtask: queueMicrotask");
});


/*
----------------------------------------
5️⃣ More Synchronous Code
----------------------------------------
*/
console.log("2️⃣ End of Script");


/*
========================================
EXPECTED OUTPUT
========================================

1️⃣ Start of Script
2️⃣ End of Script
3️⃣ Microtask: Promise.then
4️⃣ Microtask: queueMicrotask
5️⃣ Macrotask: setTimeout callback

========================================

Execution Order Explanation:

Step 1:
Synchronous code runs first.
(Start → End)

Step 2:
Call Stack becomes empty.

Step 3:
Event Loop executes ALL Microtasks.
(Promise.then → queueMicrotask)

Step 4:
Event Loop executes ONE Macrotask.
(setTimeout)

========================================
*/