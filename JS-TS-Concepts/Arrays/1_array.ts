// Arrays in TypeScript

// An array is a data structure used to store multiple values in a single variable.
// TypeScript arrays are like JavaScript arrays, but with type safety.


// =================
// Basic Syntax
// =================



// Method 1
// let numbers: number[] = [1, 2, 3, 4];

// Method 2 (Generic Syntax)

// let numbers: Array<number> = [1, 2, 3];

let str_array:string[] = ['a','b','d']
let str_array2:Array<string> = ['ab','d']
let bool_arr:boolean[] = [true, false,true,true,false]
let mixes:(boolean | number | string)[] = [1,2,'one', true]



// Updating the value 
let array_val:Array<string> = ['a','b','d','c']
array_val[2] = 'abdullah'
console.log(array_val)


// push ()
// add elements at the end 
array_val.push('Muhammad Abdullah');

// pop ()
// remove the element from the end 
array_val.pop();

// shift ()
// shift method is used to remove the first element form the array 
array_val.shift();

// unshift () 
// unshift method is used to add the element at the start 

array_val.unshift("Python")




//============================
// Looping Over the Array 
//============================

for (let i = 0; i<array_val.length; i++){
    console.log(array_val[i])
}


// for of Loop 

for (let val of array_val){
    console.log(val)
}


// =================
// For Each loop 
// =================

array_val.forEach((item:string)=>{
    console.log(item)
})


// Map Method 
// It return the new array 

let num1:number[] = [1,2,3,4,5];

let val:number[] = num1.map((item:number,index:number):number=>{
    return item * 2;
})

console.log(val)


// filter()
// Filters values.
// and it also returns the new array 

let filters = num1.filter((item:number):boolean=>{
    return item % 2 === 0
})
console.log(filters)

let name1:string[] = ['Rajab', 'Ali', 'Abdullah']

let found = name1.find((fin:string)=>{
   return fin === 'Rajab'
})

console.log(found)
