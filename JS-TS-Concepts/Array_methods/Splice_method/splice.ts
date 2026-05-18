// =========================================
// splice() Method in TypeScript
// =========================================

// The .splice() method is used to:

// - remove elements
// - add elements
// - replace elements


// Most Important Concept
// .splice() MODIFIES the original array. ⚠️


//================
// Syntax
//================

// array.splice(startIndex, deleteCount, newItems)

//Removing the elements from the array 
let num:number[] = [1,2,3,4,5,6];
console.log(num.splice(1,2));


//Adding the element in the array 
console.log(num.splice(0,0,1,2,3));


// Replace the specific value at the particular index
let fruits:string[] = ["Apple","Banana","Orange"]
fruits.splice(1,1,"Mango");

// - Start at index 1
// - Delete 1 item
// - Insert "Mango"