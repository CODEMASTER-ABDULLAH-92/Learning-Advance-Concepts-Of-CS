


// Basic syntax 

// function functionName(parameter: type): returnType {
//   // code
// }







// This is the simple JS function 

// function greeting():void{
//     console.log("Hi, abdullah")
// }
// greeting()



// This is the TS function with the parameter 
// function greeting(name:string):void{
//     console.log(`Hi, ${name}`)
// }

// greeting("Abdullah")



// Here this is the function with the parameters and the return type also

// function greeting(name:string, age:number, roll_num:number):string{
//     return `Hi, my name is ${name}, i'm ${age} years old and my roll Number is ${roll_num}.`
// }

// let result = greeting("Abdullah", 23,234245)
// console.log(result)




// Here we use the optional parameters 

// function User(name:string, age?:number):string{
// return`Name: ${name}, age:${age}`
// }
// let u1 = User("Abdullah", 23)
// let u2 = User("Ali", 25)

// console.log(u1)
// console.log(u2)


// Here is the use of the defualt parameters 

// function User(name:string="guest"):string{
//     return `Wellcome, ${name}`
// }

// let u1 = User()
// let u2 = User("Abdullah")
// console.log(u1)
// console.log(u2)


// Now Working with the arrow function 

// type UserType = {
//     name:string,
//     age?:number,
//     roll_num?:number
// }

// const User = ({name, age = 23, roll_num}:UserType):string => {
//     return `Name: ${name}\n,Age:${age}\n, Roll_number${roll_num}`
// }

// let u1 = User({name:"Muhammad Abdullah", roll_num:234245})
// console.log(u1)


