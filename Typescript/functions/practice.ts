// 	59.	Write a function that checks if a user is above 18.
// 	60.	Write a function that receives another function (callback).
// 	61.	Build a multiply(a)(b) function (currying basics).
// 	62.	Write a function that capitalizes the first letter of each word.
// 	63.	Write a custom map function using loops.
// 	64.	Write a custom filter.
// 	65.	Write a custom reduce.
// 	66.	Write a custom find.
// 	67.	Build a function that groups items by category.
// 	68.	Build a function that merges two arrays uniquely.
// 	69.	Build a function that removes empty values from an object.
// 	70.	Build a function that validates email format.


// -----------------------------------------------------------

// 56.	Build a function that returns the square of a number.

// -----------------------------------------------------------

function square_of_number(num:number):number{
    return num*num
} 
console.log(square_of_number(4));



// -----------------------------------------------------------

// 	57.	Build a function that returns the reverse of a string.

// -----------------------------------------------------------


const reverse_string = (str: string): string => {
    let arr = str.split("");
    let first_value = 0;
    let last_value = arr.length - 1;

    while (first_value < last_value) {
        [arr[first_value], arr[last_value]] =
        [arr[last_value], arr[first_value]];
        first_value++;
        last_value--;
    }

    return arr.join("");
};

console.log(reverse_string("abdullah"));



// -----------------------------------------------------------
// 58. Write a function that returns the sum of an array.
// -----------------------------------------------------------

const array_sum = (num: number[]):number => {
    let sum:number = 0;
    for (let i = 0; i<num.length; i++){
        sum = sum + num[i];
    }   
    return sum
}
let num:number[] = [1,2,3,4,5]
let result = array_sum(num)
console.log(result)



