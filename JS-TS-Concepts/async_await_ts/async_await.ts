// What is Asynchronous Programming?

// Asynchronous code allows tasks to run:
// - in the background
// - without blocking the application

// Examples:

// - API requests
// - Database queries
// - File reading
// - Authentication
// - Timers


async function greet(){
    return "Hi"
}
greet().then((data)=> console.log(data))



async function getUsers(){
    try {
        let resposne = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await resposne.json();
        console.log(users);
    } catch (error) {
        console.error("Api Error", error);
    }
}
getUsers();

