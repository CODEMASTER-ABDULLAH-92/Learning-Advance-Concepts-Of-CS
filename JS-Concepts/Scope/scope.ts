// The area where a variable, function, or value can be accessed in your program.

// ===================
// 1. Global Scope
// ===================

// A variable declared outside all functions or blocks.
// Accessible from anywhere.

let userName:string = "Muhammad Abdullah"

const showUser = ():string =>{
    return `${userName}`
}

console.log(showUser());
console.log(userName);

// ==================
// 2. Function Scope
// ==================

// Variables declared inside a function can only be used inside that function.


let test = ():number=>{
    let num:number = 23
    return num
}
test()
// console.log(num);
// num exists only inside test().


// ===============
// 3. Block Scope
// ===============

// Variables declared with let and const inside `{}` are only accessible inside that block.

if (true) {
  let city = "Faisalabad";
  console.log(city);
}

// console.log(city); ❌ Error




//===================
// 4. Lexical Scope
//===================

// Inner functions can access variables from outer functions.

const outer = () =>{
    let age = 23;

    const inner = ()=>{
        age++;
        console.log(age);
    }
    return inner();
}
outer();