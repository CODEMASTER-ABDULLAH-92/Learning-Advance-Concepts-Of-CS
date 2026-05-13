/*
====================================================
  ASYNC / AWAIT COMPLETE GUIDE (WITH THEORY)
====================================================

WHAT IS ASYNC?

- async makes a function return a Promise automatically.
- Even if you return a normal value, it becomes Promise.resolve(value).
- It allows us to use "await" inside the function.

WHAT IS AWAIT?

- await pauses the execution of an async function. It waits for a Promise to resolve or reject.
- It DOES NOT block the whole JavaScript thread.
- It only pauses that specific async function.

IMPORTANT:
JavaScript is single-threaded.
Async/Await works using:
- Call Stack
- Web APIs
- Microtask Queue
- Event Loop
====================================================
*/



/*
----------------------------------------------------
1️⃣ BASIC ASYNC FUNCTION
----------------------------------------------------

THEORY:

When we mark a function as async:
- It ALWAYS returns a Promise.
- Even if we return a simple string.
*/

async function basicAsync() {
  return "Hello Async";  // Automatically wrapped in Promise
}

basicAsync().then((result) => {
  console.log("Basic Async Result:", result);
});

// Equivalent to:
// function basicAsync() {
//   return Promise.resolve("Hello Async");
// }
/*



/*
====================================================
FINAL SUMMARY
====================================================

async:
- Makes function return Promise.

await:
- Pauses async function.
- Waits for Promise.
- Uses microtask queue.
- Does NOT block main thread.

Sequential = slower
Parallel (Promise.all) = faster
*/