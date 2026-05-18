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

// ==============
// push 
// ==============
//Adding element at the end of the array 

let num:(number | string)[] = [1,2,3,4,5]
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
