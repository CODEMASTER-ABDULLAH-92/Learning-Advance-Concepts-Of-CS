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


