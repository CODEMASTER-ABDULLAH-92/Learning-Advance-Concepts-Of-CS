/*
========================================
SPREAD OPERATOR IN TYPESCRIPT
========================================

The spread operator is written as:

...

It is used to:

1. Unpack arrays
2. Unpack objects
3. Expand values

----------------------------------------
IMPORTANT UNDERSTANDING
----------------------------------------

The spread operator itself DOES NOT
create an array or object.

It simply EXPANDS / UNPACKS values.

The surrounding structure decides
what will be created.

========================================
1. SPREAD OPERATOR WITH ARRAYS
========================================
*/

let numbers:number[] = [10,20,30]

console.log(...numbers)

/*
OUTPUT:

10 20 30

Explanation:

...numbers

unpacks the array into separate values.

Internally it behaves like:

console.log(10,20,30)

So yes:

The spread operator UNPACKS arrays.
*/


/*
========================================
2. DOES SPREAD RETURN AN ARRAY?
========================================
*/

let arr:number[] = [1,2,3]

console.log(...arr)

/*
OUTPUT:

1 2 3

NOT:

[1,2,3]

Why?

Because spread operator only expands values.

It does NOT automatically create an array.
*/


/*
========================================
3. CREATING A NEW ARRAY USING SPREAD
========================================
*/

let original:number[] = [1,2,3]

let copied:number[] = [...original]

console.log(copied)

/*
OUTPUT:

[1,2,3]

Explanation:

Step 1:
...original

becomes:

1,2,3

Step 2:
[] around it creates a new array.

So:

[...original]

becomes:

[1,2,3]

Important:

Spread operator unpacked the values,
and [] created the array.
*/


/*
========================================
4. MERGING ARRAYS
========================================
*/

let frontend:string[] = ["HTML","CSS"]
let backend:string[] = ["Node.js","Express"]

let fullStack:string[] = [...frontend,...backend]

console.log(fullStack)

/*
OUTPUT:

["HTML","CSS","Node.js","Express"]

Explanation:

...frontend -> "HTML","CSS"
...backend  -> "Node.js","Express"

Then [] creates one new array.
*/


/*
========================================
5. SPREAD OPERATOR WITH OBJECTS
========================================
*/

let user = {
    name:"Ali",
    age:20
}

let copiedUser = {...user}

console.log(copiedUser)

/*
OUTPUT:

{
    name:"Ali",
    age:20
}

Explanation:

...user

unpacks object properties:

name:"Ali",
age:20

Then {} creates a new object.
*/


/*
========================================
6. MERGING OBJECTS
========================================
*/

let basicInfo = {
    name:"Abdullah"
}

let extraInfo = {
    city:"Faisalabad",
    age:20
}

let completeUser = {
    ...basicInfo,
    ...extraInfo
}

console.log(completeUser)

/*
OUTPUT:

{
    name:"Abdullah",
    city:"Faisalabad",
    age:20
}
*/


/*
========================================
7. OVERRIDING VALUES
========================================
*/

let student = {
    name:"Ali",
    age:20
}

let updatedStudent = {
    ...student,
    age:25
}

console.log(updatedStudent)

/*
OUTPUT:

{
    name:"Ali",
    age:25
}

Explanation:

Later values overwrite earlier values.
*/


/*
========================================
8. SPREAD OPERATOR IN FUNCTIONS
========================================
*/

function add(a:number,b:number,c:number):number{
    return a + b + c
}

let values:number[] = [10,20,30]

console.log(add(...values))

/*
OUTPUT:

60

Explanation:

...values

becomes:

10,20,30

So internally:

add(10,20,30)
*/


/*
========================================
9. SIMPLE MENTAL MODEL
========================================

Spread Operator = "Open the Box"

----------------------------------------
ARRAY
----------------------------------------

[1,2,3]

becomes:

1,2,3

----------------------------------------
OBJECT
----------------------------------------

{name:"Ali"}

becomes:

name:"Ali"

----------------------------------------
THEN:
----------------------------------------

[] -> creates array
{} -> creates object
function() -> passes arguments
*/


/*
========================================
10. FINAL CONCLUSION
========================================

1. Spread operator UNPACKS values.

2. It can unpack:
   - arrays
   - objects

3. Spread itself does NOT create arrays.

4. Example:

...arr

returns expanded values.

5. But:

[...arr]

creates a new array because [] surrounds it.

6. Same for objects:

{...obj}

creates a new object.

========================================
END
========================================
*/