/*
========================================
MODULES IN TYPESCRIPT
========================================

A module in TypeScript is a reusable
code file.

Modules help organize code into
separate files.

A module can contain:

1. Variables
2. Functions
3. Classes
4. Interfaces
5. Types

These can be:

- exported from one file
- imported into another file

========================================
SIMPLE DEFINITION
========================================

MODULE = REUSABLE CODE FILE

========================================
WHY MODULES ARE IMPORTANT
========================================

Without modules:

- all code stays in one file
- code becomes messy
- difficult to maintain
- difficult to reuse

Modules solve this problem by splitting
large applications into smaller files.

========================================
REAL-WORLD ANALOGY
========================================

One file = One department

Examples:

- Authentication module
- Payment module
- User module
- Database module

Each module handles one responsibility.

This is called:

"Separation of Concerns"
*/


/*
========================================
BASIC MODULE SYSTEM
========================================

Modules mainly use:

1. export
2. import
*/


/*
========================================
1. EXPORTING FROM A MODULE
========================================

FILE: math.ts
========================================
*/

export function add(a:number,b:number):number{

    return a + b
}

export function subtract(a:number,b:number):number{

    return a - b
}

/*
Explanation:

export makes functions available
outside this file.
*/


/*
========================================
2. IMPORTING INTO ANOTHER FILE
========================================

FILE: app.ts
========================================
*/

/*
import { add, subtract } from "./math"

console.log(add(10,5))
console.log(subtract(10,5))
*/

/*
OUTPUT:

15
5

Explanation:

math.ts exports functions

app.ts imports functions
*/


/*
========================================
HOW MODULES WORK
========================================

math.ts

exports:

- add
- subtract

----------------------------------------

app.ts

imports them using:

import
*/


/*
========================================
TYPES OF EXPORTS
========================================

There are mainly two types:

1. Named Export
2. Default Export
*/


/*
========================================
1. NAMED EXPORT
========================================

Used for exporting multiple values.

FILE: user.ts
========================================
*/

export const username:string = "Abdullah"

export function greet():void{

    console.log("Hello")
}

/*
========================================
FILE: app.ts
========================================
*/

/*
import { username, greet } from "./user"

console.log(username)

greet()
*/


/*
OUTPUT:

Abdullah
Hello
*/


/*
========================================
2. DEFAULT EXPORT
========================================

A file can have only ONE default export.

FILE: message.ts
========================================
*/

export default function message():void{

    console.log("Welcome")
}


/*
========================================
FILE: app.ts
========================================
*/

/*
import message from "./message"

message()
*/


/*
OUTPUT:

Welcome
*/


/*
========================================
DIFFERENCE BETWEEN NAMED AND DEFAULT
========================================

----------------------------------------
NAMED EXPORT
----------------------------------------

1. Multiple exports allowed
2. Uses {}
3. Import name must match


----------------------------------------
DEFAULT EXPORT
----------------------------------------

1. Only one allowed
2. No {}
3. Import name can be anything
*/


/*
========================================
DEFAULT EXPORT EXAMPLE
========================================
*/

export default function test():void{

    console.log("Testing")
}


/*
Import example:

import abc from "./file"

Notice:

abc can be any name.
*/


/*
========================================
MODULE SCOPE
========================================

Variables inside modules are private
unless exported.
*/


/*
========================================
EXAMPLE
========================================
*/

const password:string = "12345"

export const user:string = "Ali"

/*
Only:

user

can be imported.

password remains private.
*/


/*
========================================
IMPORTANT NOTE
========================================

A file becomes a module when it contains:

1. import
OR
2. export

Without them, the file is treated
as a normal script.
*/


/*
========================================
REAL-WORLD REACT EXAMPLE
========================================

FILE: Navbar.tsx
========================================
*/

/*
export default function Navbar(){

    return <h1>Navbar</h1>
}
*/


/*
========================================
FILE: App.tsx
========================================
*/

/*
import Navbar from "./Navbar"

function App(){

    return <Navbar />
}
*/


/*
This is module system usage in React.
*/


/*
========================================
BENEFITS OF MODULES
========================================

1. Reusable code
2. Cleaner structure
3. Better maintainability
4. Easier debugging
5. Scalability
6. Encapsulation
7. Team collaboration
*/


/*
========================================
COMMON PROJECT STRUCTURE
========================================

src/

├── components/
├── controllers/
├── models/
├── services/
├── utils/
└── app.ts

Each folder contains modules.
*/


/*
========================================
IMPORTANT KEYWORDS
========================================

export
----------------------------------------
Sends code outside file


import
----------------------------------------
Brings code into file


default
----------------------------------------
Main export of a file
*/


/*
========================================
MENTAL MODEL
========================================

export = GIVE

import = TAKE
*/


/*
========================================
FINAL CONCLUSION
========================================

A module in TypeScript is:

"A reusable file of code"

that uses:

export

to share code

and:

import

to use code from other files.

*/