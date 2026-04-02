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