/*
========================================
OPTIONAL CHAINING IN TYPESCRIPT
========================================

Optional Chaining is written as:

?.

It is used to safely access:

1. Object properties
2. Nested properties
3. Methods
4. Array elements

without causing runtime errors if a value
is undefined or null.

========================================
PROBLEM WITHOUT OPTIONAL CHAINING
========================================
*/

let user1 = {
    name:"Abdullah",
    address:{
        city:"Faisalabad"
    }
}

console.log(user1.address.city)

/*
OUTPUT:

Faisalabad

This works because address exists.
*/


/*
========================================
PROBLEM CASE
========================================
*/

let user2:any = {
    name:"Abdullah"
}

/*
❌ ERROR
----------------------------------------

console.log(user2.address.city)

ERROR:

Cannot read properties of undefined

Why?

Because:

user2.address

is undefined.
*/


/*
========================================
SOLUTION -> OPTIONAL CHAINING
========================================
*/

console.log(user2.address?.city)

/*
OUTPUT:

undefined

Explanation:

?. checks safely before going deeper.

If left side is:
- undefined
- null

then TypeScript stops safely.
*/


/*
========================================
HOW OPTIONAL CHAINING WORKS
========================================

?.

means:

"Check first before accessing"

If value exists:
-> continue

If value is undefined/null:
-> stop safely
*/


/*
========================================
1. OPTIONAL CHAINING WITH NESTED OBJECTS
========================================
*/

let student1 = {
    name:"Ali",
    course:{
        title:"TypeScript"
    }
}

console.log(student1.course?.title)

/*
OUTPUT:

TypeScript
*/


/*
========================================
MISSING PROPERTY EXAMPLE
========================================
*/

let student2:any = {
    name:"Ali"
}

console.log(student2.course?.title)

/*
OUTPUT:

undefined

No crash occurs.
*/


/*
========================================
2. OPTIONAL CHAINING WITH METHODS
========================================
*/

let user3 = {

    name:"Abdullah",

    greet(){
        console.log("Hello")
    }
}

user3.greet?.()

/*
OUTPUT:

Hello
*/


/*
========================================
METHOD DOES NOT EXIST
========================================
*/

let user4:any = {
    name:"Ali"
}

user4.greet?.()

/*
OUTPUT:

undefined

No runtime error occurs.
*/


/*
========================================
3. OPTIONAL CHAINING WITH ARRAYS
========================================
*/

let numbers:number[] = [10,20,30]

console.log(numbers?.[1])

/*
OUTPUT:

20
*/


/*
========================================
UNDEFINED ARRAY EXAMPLE
========================================
*/

let values:number[] | undefined

console.log(values?.[0])

/*
OUTPUT:

undefined

Safe access.
*/


/*
========================================
4. REAL-WORLD API EXAMPLE
========================================
*/

let apiResponse = {

    user:{
        profile:{
            username:"abdullah"
        }
    }
}

console.log(apiResponse.user?.profile?.username)

/*
OUTPUT:

abdullah

Explanation:

Optional chaining safely checks
each level.
*/


/*
========================================
WITHOUT OPTIONAL CHAINING
========================================
*/

let profileUser:any = {
    profile:{
        name:"Ali"
    }
}

/*
Old messy way:

if(
    profileUser &&
    profileUser.profile &&
    profileUser.profile.name
){
    console.log(profileUser.profile.name)
}
*/


/*
========================================
WITH OPTIONAL CHAINING
========================================
*/

console.log(profileUser?.profile?.name)

/*
OUTPUT:

Ali

Cleaner and shorter.
*/


/*
========================================
IMPORTANT NOTE
========================================

Optional chaining ONLY checks:

- undefined
- null

It DOES NOT check:

- false
- 0
- empty string
*/


/*
========================================
EXAMPLE
========================================
*/

let value = {
    count:0
}

console.log(value?.count)

/*
OUTPUT:

0

Because 0 is a valid value.
*/


/*
========================================
OPTIONAL CHAINING + NULLISH COALESCING
========================================
*/

let currentUser:any = {}

console.log(currentUser.name?.toUpperCase() ?? "No Name")

/*
OUTPUT:

No Name

Explanation:

?. safely checks

?? provides default value
if result is null or undefined.
*/


/*
========================================
OPTIONAL CHAINING SYNTAX
========================================

----------------------------------------
PROPERTY ACCESS
----------------------------------------

object?.property


----------------------------------------
METHOD ACCESS
----------------------------------------

object?.method()


----------------------------------------
ARRAY ACCESS
----------------------------------------

array?.[index]
*/


/*
========================================
MENTAL MODEL
========================================

?.

means:

"CHECK BEFORE GOING DEEPER"

----------------------------------------

If value exists:
-> continue

If value is undefined/null:
-> stop safely
*/


/*
========================================
FINAL CONCLUSION
========================================

OPTIONAL CHAINING:

1. Safely accesses properties
2. Prevents runtime crashes
3. Works with:
   - objects
   - methods
   - arrays
   - nested data
*/
