// | Method        | Purpose            |
// | ------------- | ------------------ |
// | `push()`      | Add at end         |
// | `pop()`       | Remove from end    |
// | `shift()`     | Remove from start  |
// | `unshift()`   | Add at start       |
// | `map()`       | Transform array    |
// | `filter()`    | Filter data        |
// | `find()`      | Find first match   |
// | `findIndex()` | Find index         |
// | `includes()`  | Check existence    |
// | `some()`      | At least one match |
// | `every()`     | All match          |
// | `reduce()`    | Accumulate values  |
// | `sort()`      | Sort array         |
// | `reverse()`   | Reverse array      |
// | `slice()`     | Copy portion       |
// | `splice()`    | Modify original    |
// | `concat()`    | Merge arrays       |
// | `join()`      | Convert to string  |

let num:(number | string)[] = [1,2,3,4,5]
let num2:(number)[] = [1,2,3,4,5]

//=============
//concat()
//=============
console.log(num.concat(num2))


//==============
//Join 
//==============

console.log(num.join(" "))

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

let numbers:number[] = [1,2,3,4]

let total = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
},0)

console.log(total)


//===============
// Every  
//===============
// every() checks:
// “Do ALL elements satisfy this condition?”

let every_method_example = num2.every((item)=>{
    return item > 0
})

console.log(every_method_example);


//===============
// some 
//===============
// .some() checks:
// “Does at least one element satisfy this condition?”

let is_two_exist = num.some((item) =>{
    return item === 2
})

console.log(is_two_exist)


// ==============
// includes
// ==============
//The include method works with arrays and strings and return true if the value is exist
//Working with the arrays 

let incLudedValue = num.includes(3);
console.log(incLudedValue);

let stri = "My name is abdullah";
let check_str_included = stri.includes("is");
console.log(check_str_included);



// ==============
// push 
// ==============
//Adding element at the end of the array 

num.push(6)
console.log(num);




// ==============
// pop 
// ==============
//Removing  element at the end of the array 
num.pop();
console.log(num)

// ==============
// unshift 
// ==============
//Adding element at the start of the array 

num.unshift("Abdullah")
console.log(num);


// ==============
// shift 
// ==============
//Removing element at the start of the array 
num.unshift();
console.log(num)



// ==============
// Map 
// ==============
// Map method iterate on every element of the array and give or retrun the new array 
num.map((item:(number | string))=>{
    console.log(item);
})


// =============
// filter
// =============
// Filter The data 
let data = num.filter((item:(number | string))=>{
    return item % 2 == 0
})
console.log(data);


// =============
// find
// =============
// find the first quccrence of the element in the array 

let foundValue = num.find((item):boolean=>{
    return item == 2
})
console.log(foundValue);


