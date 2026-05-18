// ==============
// reduce 
// ==============

// .reduce() takes all array elements and reduces them into a single value.

// That single value can be:
// - number
// - string
// - object
// - array
// - boolean


// Syntax 
// array.reduce((accumulator, currentValue) => {
//     return updatedValue
// }, initialValue)

// | Parameter      | Meaning                |
// | -------------- | ---------------------- |
// | `accumulator`  | Stores previous result |
// | `currentValue` | Current array item     |
// | `initialValue` | Starting value         |


let num:number[] = [1,2,3,4,5]

let result = num.reduce((acc, curr)=>{
    return acc + curr
},0)

console.log(result);


// Example With Object 

type Product = {
    name:string,
    price : number
}

let products:Product[] = [
    {name:"Laptop", price:1000},
    {name:"Phone", price:500},
    {name:"Tablet", price:300}
]

const totalAmount = products.reduce((acc, curr)=>{
    return acc + curr.price;
},0)

console.log(totalAmount);