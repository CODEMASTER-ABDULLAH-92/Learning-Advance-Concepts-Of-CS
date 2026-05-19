// | Keyword   | Purpose                   |
// | --------- | ------------------------- |
// | `try`     | Code that may cause error |
// | `catch`   | Handles the error         |
// | `finally` | Always runs               |
// | `throw`   | Creates custom error      |

// =========
// Syntax 
// =========

try{

    // risky code

}catch(error){

    // handle error

}finally{

    // always runs
    // finally always runs.

// Whether error happens or not.
}

try{
    let user:any = undefined
    console.log(user.name)

}catch(error){

    console.log("Error occurred")
}




function divide(a:number,b:number):number{

    if(b === 0){
        throw new Error("Division by zero is not allowed")
    }

    return a / b
}

try{

    console.log(divide(10,0))

}catch(error:any){
    console.log(error.message)
}















// ======================
// Notes 
// ======================




/*
========================================
ERROR HANDLING IN TYPESCRIPT
========================================

Error handling means:

"Managing runtime errors safely"

so the application does not crash
unexpectedly.

========================================
WHY ERROR HANDLING IS IMPORTANT
========================================

Without error handling:

- application may crash
- execution may stop
- bad user experience
- difficult debugging

Error handling helps us:

1. Catch errors
2. Handle errors safely
3. Prevent crashes
4. Continue execution
5. Improve reliability
*/


/*
========================================
MAIN ERROR HANDLING KEYWORDS
========================================

try
----------------------------------------
Code that may cause error


catch
----------------------------------------
Handles the error


finally
----------------------------------------
Always runs


throw
----------------------------------------
Creates custom error
*/


/*
========================================
BASIC SYNTAX
========================================
*/

/*
try{

    // risky code

}catch(error){

    // handle error

}finally{

    // always runs
}
*/


/*
========================================
1. TRY AND CATCH
========================================
*/

try{

    let result:number = 10 / 2

    console.log(result)

}catch(error){

    console.log("Something went wrong")
}

/*
OUTPUT:

5

Explanation:

Code inside try block runs normally.
*/


/*
========================================
REAL ERROR EXAMPLE
========================================
*/

try{

    let user:any = undefined

    console.log(user.name)

}catch(error){

    console.log("Error occurred")
}

/*
OUTPUT:

Error occurred

Explanation:

user is undefined.

Accessing:

user.name

causes runtime error.

catch block handles the error safely.
*/


/*
========================================
WITHOUT TRY-CATCH
========================================
*/

/*
❌ Program crashes

let user:any = undefined

console.log(user.name)
*/


/*
========================================
WITH TRY-CATCH
========================================
*/

try{

    let user:any = undefined

    console.log(user.name)

}catch(error){

    console.log("Handled safely")
}

/*
OUTPUT:

Handled safely

Application continues safely.
*/


/*
========================================
2. CATCH ERROR OBJECT
========================================
*/

try{

    let value:any = null

    console.log(value.toUpperCase())

}catch(error){

    console.log(error)
}

/*
OUTPUT:

TypeError: Cannot read properties of null
*/


/*
========================================
ERROR OBJECT PROPERTIES
========================================

Common properties:

1. name
2. message
3. stack
*/


/*
========================================
EXAMPLE
========================================
*/

try{

    let data:any = null

    console.log(data.name)

}catch(error:any){

    console.log(error.name)

    console.log(error.message)
}

/*
Possible OUTPUT:

TypeError

Cannot read properties of null
*/


/*
========================================
3. FINALLY BLOCK
========================================

finally always runs.

It runs:

1. Whether error occurs
2. Whether error does not occur
*/


/*
========================================
EXAMPLE WITHOUT ERROR
========================================
*/

try{

    console.log("Try block")

}catch(error){

    console.log("Catch block")

}finally{

    console.log("Finally block")
}

/*
OUTPUT:

Try block
Finally block
*/


/*
========================================
EXAMPLE WITH ERROR
========================================
*/

try{

    let user:any = undefined

    console.log(user.name)

}catch(error){

    console.log("Error handled")

}finally{

    console.log("Database closed")
}

/*
OUTPUT:

Error handled
Database closed

Explanation:

finally always executes.
*/


/*
========================================
WHY FINALLY IS IMPORTANT
========================================

Used for cleanup operations:

- close database
- close files
- stop loading
- disconnect APIs
*/


/*
========================================
4. THROW KEYWORD
========================================

throw is used to create custom errors.
*/


/*
========================================
EXAMPLE
========================================
*/

function divide(a:number,b:number):number{

    if(b === 0){

        throw new Error(
            "Division by zero is not allowed"
        )
    }

    return a / b
}

try{

    console.log(divide(10,0))

}catch(error:any){

    console.log(error.message)
}

/*
OUTPUT:

Division by zero is not allowed
*/


/*
========================================
HOW THROW WORKS
========================================

throw manually creates an error.

Example:

throw new Error("Custom message")
*/


/*
========================================
CUSTOM VALIDATION EXAMPLE
========================================
*/

function login(password:string):void{

    if(password.length < 8){

        throw new Error(
            "Password too short"
        )
    }

    console.log("Login success")
}

try{

    login("123")

}catch(error:any){

    console.log(error.message)
}

/*
OUTPUT:

Password too short
*/


/*
========================================
5. ERROR HANDLING WITH API EXAMPLE
========================================
*/

async function fetchData(){

    try{

        let response = await fetch("api-url")

        let data = await response.json()

        console.log(data)

    }catch(error){

        console.log("API Error")
    }
}

/*
Explanation:

If API fails,
catch block handles the error safely.
*/


/*
========================================
REAL-WORLD USAGE
========================================

Error handling is heavily used in:

1. React
2. Node.js
3. Express.js
4. APIs
5. Databases
6. Authentication systems
*/


/*
========================================
TYPES OF ERRORS
========================================

1. Syntax Error
----------------------------------------
Wrong syntax


2. Runtime Error
----------------------------------------
Happens during execution


3. Logical Error
----------------------------------------
Wrong logic/output
*/


/*
========================================
RUNTIME ERROR EXAMPLE
========================================
*/

let runtimeUser:any = undefined

/*
console.log(runtimeUser.name)

This causes runtime error.
*/


/*
========================================
LOGICAL ERROR EXAMPLE
========================================
*/

console.log(10 * 10)

/*
Suppose developer expected addition
instead of multiplication.

This is logical error.
*/


/*
========================================
IMPORTANT BEST PRACTICE
========================================

Avoid using:

error:any

too much in large applications.

Use proper type checking whenever possible.

But beginners often use:

error:any

for simplicity.
*/


/*
========================================
MENTAL MODEL
========================================

try
----------------------------------------
"Attempt this code"


catch
----------------------------------------
"Handle problems"


finally
----------------------------------------
"Always execute"


throw
----------------------------------------
"Create custom error"
*/


/*
========================================
FINAL CONCLUSION
========================================

Error handling in TypeScript helps:

1. Prevent crashes
2. Manage runtime errors safely
3. Create custom errors
4. Improve application reliability

Main keywords:

- try
- catch
- finally
- throw

These are essential for:

- React applications
- Node.js
- Express.js
- APIs
- Databases
- Authentication systems
*/