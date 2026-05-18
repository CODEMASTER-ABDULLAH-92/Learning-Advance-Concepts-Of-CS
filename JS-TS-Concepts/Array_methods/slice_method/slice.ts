


// The .slice() method is used to extract a portion of an array or string without modifying the original data.

// It returns a new array or new string.

// Syntax

// array.slice(startIndex, endIndex)

let num:number[] = [1,2,3,4,5,6];
console.log(num.slice(0,3));


// Copying an Array
// You can clone arrays using .slice().
let copiedArray = num.slice();
console.log(copiedArray);


// Important Notes
// .slice():
// - does NOT modify original array
// - returns a new array
// - end index is excluded
// - supports negative indexes

// | Task                       | Code             |
// | -------------------------- | ---------------- |
// | Copy whole array           | `arr.slice()`    |
// | First 3 items              | `arr.slice(0,3)` |
// | Last 2 items               | `arr.slice(-2)`  |
// | Remove first item visually | `arr.slice(1)`   |
