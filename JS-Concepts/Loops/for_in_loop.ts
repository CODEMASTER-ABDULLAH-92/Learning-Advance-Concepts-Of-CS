//=====================
// for...in Loop
//=====================
// Used for objects.

// Returns keys.


interface User {
    name: string,
    age?:number,
    readonly id: string
}

const user:User = {
    name:"Muhammad Abdullah",
    age:23,
    id:"123"
}

// Accessing the keys only

for (let i in user){
    console.log(i);
}

// Accessing the values 

for (let i in user){
    console.log(user[i as keyof typeof user]);
}