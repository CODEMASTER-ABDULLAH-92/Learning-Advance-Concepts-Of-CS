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
----------------------------------------------------
2️⃣ AWAIT WITH PROMISE
----------------------------------------------------

THEORY:

- await waits for the Promise to resolve.
- Execution pauses inside this async function only.
- After resolution, execution continues.
*/

function simulateAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received from API");
    }, 2000);
  });
}

async function fetchData() {
  console.log("Fetching data...");
  
  // Execution pauses here for 2 seconds
  const result = await simulateAPI();
  
  console.log("Fetched:", result);
}

fetchData();



/*
----------------------------------------------------
3️⃣ ERROR HANDLING (TRY / CATCH)
----------------------------------------------------

THEORY:

If Promise rejects:
- await throws an error.
- We must use try/catch to handle it.
*/

function simulateError() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Something went wrong!");
    }, 1000);
  });
}

async function handleError() {
  try {
    const result = await simulateError();
    console.log(result);
  } catch (error) {
    console.log("Caught Error:", error);
  }
}

handleError();



/*
----------------------------------------------------
4️⃣ SEQUENTIAL EXECUTION
----------------------------------------------------

THEORY:

If we use await one by one:
- Second task waits for first to finish.
- Total time = task1 time + task2 time.
*/

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 1 Done"), 2000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 2 Done"), 2000);
  });
}

async function sequentialExecution() {
  console.time("Sequential");

  const result1 = await task1(); // waits 2 sec
  console.log(result1);

  const result2 = await task2(); // waits another 2 sec
  console.log(result2);

  console.timeEnd("Sequential"); // ~4 seconds
}

sequentialExecution();



/*
----------------------------------------------------
5️⃣ PARALLEL EXECUTION
----------------------------------------------------

THEORY:

Promise.all runs tasks at the same time.
Total time = longest task time.
*/

async function parallelExecution() {
  console.time("Parallel");

  const [result1, result2] = await Promise.all([
    task1(),
    task2(),
  ]);

  console.log(result1);
  console.log(result2);

  console.timeEnd("Parallel"); // ~2 seconds
}

parallelExecution();



/*
----------------------------------------------------
6️⃣ AWAIT WITH NON-PROMISE
----------------------------------------------------

THEORY:

If we await a normal value:
JavaScript automatically converts it into:
Promise.resolve(value)
*/

async function awaitNonPromise() {
  const value = await 10;
  console.log("Await Non-Promise:", value);
}

awaitNonPromise();



/*
----------------------------------------------------
7️⃣ THROWING ERROR INSIDE ASYNC
----------------------------------------------------

THEORY:

If we throw inside async function:
It becomes Promise.reject().
*/

async function throwError() {
  throw new Error("Async function error");
}

throwError().catch((error) => {
  console.log("Thrown Error:", error.message);
});



/*
----------------------------------------------------
8️⃣ EVENT LOOP DEMONSTRATION
----------------------------------------------------

THEORY:

Order of execution:
1. Synchronous code
2. Microtasks (Promises, await)
3. Macrotasks (setTimeout)

Microtasks run before setTimeout.
*/

console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then");
});

(async function () {
  await null;
  console.log("Microtask: await resumed");
})();

console.log("End");



/*
----------------------------------------------------
9️⃣ LOOP WITH AWAIT (SEQUENTIAL)
----------------------------------------------------

THEORY:

Using await inside loop:
Each iteration waits for previous one.
*/

async function loopSequential() {
  console.log("Loop Sequential Start");

  for (let i = 1; i <= 3; i++) {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log("Processing item:", i);
        resolve();
      }, 1000)
    );
  }

  console.log("Loop Sequential End");
}

loopSequential();



/*
----------------------------------------------------
🔟 LOOP WITH PARALLEL EXECUTION
----------------------------------------------------

THEORY:

We create all promises first.
Then wait for all together using Promise.all.
*/

async function loopParallel() {
  console.log("Loop Parallel Start");

  const tasks = [1, 2, 3].map((num) =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Parallel item:", num);
        resolve();
      }, 1000)
    )
  );

  await Promise.all(tasks);

  console.log("Loop Parallel End");
}

loopParallel();



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

====================================================
END OF FILE
====================================================
*/