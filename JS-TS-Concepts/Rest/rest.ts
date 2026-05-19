/*
========================================
REST OPERATOR IN TYPESCRIPT
========================================

The Rest Operator is written as:

...

The syntax is the same as the spread operator,
but the purpose is different.

----------------------------------------
SPREAD VS REST
----------------------------------------

Spread Operator:
-> Expands / unpacks values

Rest Operator:
-> Collects / packs values

========================================
SIMPLE UNDERSTANDING
========================================

Spread  = OPEN THE BOX
Rest    = PUT INTO THE BOX

========================================
1. REST OPERATOR IN FUNCTIONS
========================================
*/

function add(...numbers:number[]):void{

    console.log(numbers)
}

add(10,20,30,40,50)

/*
OUTPUT:

[10,20,30,40,50]

Explanation:

...numbers

collects all arguments into one array.

Internally:

add(10,20,30,40,50)

becomes:

numbers = [10,20,30,40,50]

Important:

Rest operator COLLECTS values.
*/


/*
========================================
2. REST OPERATOR SUM EXAMPLE
========================================
*/

function sum(...numbers:number[]):number{

    let total:number = 0

    for(let num of numbers){
        total += num
    }

    return total
}

console.log(sum(10,20))
console.log(sum(10,20,30))
console.log(sum(10,20,30,40))

/*
OUTPUT:

30
60
100

Explanation:

All arguments are collected into one array.
*/


/*
========================================
3. REST WITH NORMAL PARAMETERS
========================================
*/

function userInfo(name:string,...skills:string[]):void{

    console.log(name)
    console.log(skills)
}

userInfo("Abdullah","React","Node.js","MongoDB")

/*
OUTPUT:

Abdullah
["React","Node.js","MongoDB"]

Explanation:

name -> receives first argument

...skills -> collects remaining arguments
into an array.
*/


/*
========================================
4. REST PARAMETER MUST BE LAST
========================================
*/

/*
❌ WRONG
----------------------------------------

function test(...numbers:number[],name:string){}

Why wrong?

Because rest operator collects all remaining
arguments, so no parameter can come after it.
*/


/*
========================================
5. REST OPERATOR IN ARRAY DESTRUCTURING
========================================
*/

let numbers:number[] = [10,20,30,40,50]

let [first,second,...remaining] = numbers

console.log(first)
console.log(second)
console.log(remaining)

/*
OUTPUT:

10
20
[30,40,50]

Explanation:

...remaining

collects leftover elements into an array.
*/


/*
========================================
6. REST OPERATOR IN OBJECT DESTRUCTURING
========================================
*/

let user = {
    name:"Ali",
    age:20,
    city:"Faisalabad"
}

let {name,...otherDetails} = user

console.log(name)
console.log(otherDetails)

/*
OUTPUT:

Ali

{
    age:20,
    city:"Faisalabad"
}

Explanation:

...otherDetails

collects remaining object properties.
*/


/*
========================================
7. SPREAD VS REST COMPARISON
========================================
*/

/*
----------------------------------------
SPREAD OPERATOR
----------------------------------------
*/

let arr:number[] = [1,2,3]

console.log(...arr)

/*
OUTPUT:

1 2 3

Explanation:

Spread operator expands values.

[1,2,3]

becomes:

1,2,3
*/


/*
----------------------------------------
REST OPERATOR
----------------------------------------
*/

function test(...values:number[]):void{

    console.log(values)
}

test(1,2,3)

/*
OUTPUT:

[1,2,3]

Explanation:

Rest operator collects values.

1,2,3

becomes:

[1,2,3]
*/


/*
========================================
8. SIMPLE MENTAL MODEL
========================================

----------------------------------------
SPREAD OPERATOR
----------------------------------------

OPEN THE BOX

[1,2,3]

becomes:

1,2,3


----------------------------------------
REST OPERATOR
----------------------------------------

PUT INTO THE BOX

1,2,3

becomes:

[1,2,3]
*/


/*
========================================
9. IMPORTANT UNDERSTANDING
========================================

The syntax is SAME:

...

But the behavior depends on context.

----------------------------------------
IF IT EXPANDS VALUES
----------------------------------------

It is SPREAD operator.

Example:

console.log(...arr)


----------------------------------------
IF IT COLLECTS VALUES
----------------------------------------

It is REST operator.

Example:

function test(...arr){}
*/


/*
========================================
10. FINAL CONCLUSION
========================================

REST OPERATOR:

1. Collects values
2. Packs values into arrays/objects
3. Commonly used in:
   - functions
   - array destructuring
   - object destructuring

----------------------------------------
MEMORY TRICK
----------------------------------------

Spread  -> OPEN VALUES
Rest    -> COLLECT VALUES

========================================
END
========================================
*/