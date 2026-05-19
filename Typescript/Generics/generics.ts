// Generics are like placeholder for type that can fill 
// later think of them as a box that can hold any type, You decide the type when you use the function 


// The Syntax

// function identity<T>(value: T): T {
//   return value;
// }


// Example 
// Without The Generics

// function identity(value: any): any {
//   return value;
// }

// let result = identity("Hello");
// result.toFixed(); // ❌ Runtime error (TS can't warn you)


function identity<T>(value:T):T{

    return value
}

console.log(identity<string>("TypeScript"))

console.log(identity<number>(100))


// Generic Interfaces

interface ApiResponse<T>{
  data:T,
  success:boolean
}

const Data:ApiResponse<{id:String, name:string,age:number}> = {
  data : {id:"33",name:"Abdullah", age:23},
  success:true
}
console.log(Data?.data?.name);
