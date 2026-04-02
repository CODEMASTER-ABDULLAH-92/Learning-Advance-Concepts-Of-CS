/*2️⃣ AWAIT WITH PROMISE
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