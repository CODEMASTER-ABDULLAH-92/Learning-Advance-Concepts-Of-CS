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
