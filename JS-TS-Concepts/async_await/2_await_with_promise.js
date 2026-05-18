// /*2️⃣ AWAIT WITH PROMISE
// ----------------------------------------------------



// THEORY:

// - await waits for the Promise to resolve.
// - Execution pauses inside this async function only.
// - After resolution, execution continues.
// */

// function simulateAPI() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data received from API");
//     }, 2000);
//   });
// }

// async function fetchData() {
//   console.log("Fetching data...");
  
//   // Execution pauses here for 2 seconds
//   const result = await simulateAPI();
  
//   console.log("Fetched:", result);
// }

// fetchData();



// const simmulateApi = ()=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("Data received From API");
//     },2000)
//   })
// }








// 🧠 Execution Flow (Step-by-step)
// 1 ==> fetchData() is called
// 2 ==> It calls simmulateApi()
// 3 ==> A Promise is created
// After 1 second:
// "Data Fetched ...." is logged
// resolve("Success") completes the promise
// await receives "Success"
// "Success" is logged

async function fetchData(){
  const result = await simmulateApi();
  console.log(result);
}

fetchData()