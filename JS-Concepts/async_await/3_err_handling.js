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
