/*
----------------------------------------------------
5️⃣ PARALLEL EXECUTION
----------------------------------------------------

THEORY:

Promise.all runs tasks at the same time.
Total time = longest task time.
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

// parallelExecution();



function paraExe(message, time){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`${message}`)
    },time)
  })
}

async function handle(){
const data =   await Promise.all([
    paraExe("Step 1", 1000),
    paraExe("Step 2", 1000),
    paraExe("Step 3", 1000),
    paraExe("Step 4", 1000),
    paraExe("Step 5", 1000),
  ])
  for(let num of data){
    console.log(num);
  }
}

handle()





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

// loopParallel();

// Sequential = slower
// Parallel (Promise.all) = faster