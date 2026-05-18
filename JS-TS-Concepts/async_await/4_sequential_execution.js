/*
----------------------------------------------------
4️⃣ SEQUENTIAL EXECUTION
----------------------------------------------------

THEORY:

If we use await one by one:
- Second task waits for first to finish
- Total time = task1 time + task2 time
*/

//Sequential execution means that statements run one after another, in the exact order they are written, with no skipping, no parallelism, and no overlap.

// Sequential execution means:
// Statements run one after another in exact order
// No skipping, no parallelism, no overlap
// 🧠 Core Idea:
// Step 1 executes
// Step 2 starts AFTER Step 1 finishes
// Step 3 starts AFTER Step 2 finishes

// 👉 Default execution model in most languages


// =======================
// Example 1
// =======================

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


// =======================
// Example 2
// =======================

function seqExe(time, message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, time);
  });
}

async function runSequence() {
  await seqExe(1000, "1");
  await seqExe(1000, "2");
  await seqExe(1000, "3");
}

runSequence();


// =======================
// 9️⃣ LOOP WITH AWAIT (SEQUENTIAL)
// =======================

/*
THEORY:

Using await inside a loop:
- Each iteration waits for the previous one
*/

async function loopSequential() {
  console.log("Loop Sequential Start");

  for (let i = 1; i <= 3; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("Processing item:", i);
        resolve();
      }, 1000);
    });
  }

  console.log("Loop Sequential End");
}

// loopSequential();


// =======================
// SUMMARY
// =======================

// Sequential = slower (tasks wait one by one)
// Parallel (Promise.all) = faster (tasks run together)