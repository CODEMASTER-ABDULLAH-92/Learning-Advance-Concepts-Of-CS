//====================================================
// DESTRUCTURING IN TYPESCRIPT
//====================================================

// Destructuring is used to extract values from
// arrays and objects into separate variables.

//====================================================
// ARRAY DESTRUCTURING
//====================================================

//----------------------------------
// Without Destructuring
//----------------------------------

let numbers1: number[] = [10, 20, 30]

let firstValue = numbers1[0]
let secondValue = numbers1[1]

console.log(firstValue)
console.log(secondValue)

//----------------------------------
// With Destructuring
//----------------------------------

let numbers2: number[] = [10, 20, 30]

let [first, second] = numbers2

console.log(first)
console.log(second)

//====================================================
// BASIC ARRAY DESTRUCTURING
//====================================================

let colors: string[] = ["Red", "Green", "Blue"]

let [firstColor, secondColor] = colors

console.log(firstColor)
console.log(secondColor)

//====================================================
// SKIPPING VALUES
//====================================================

let numbers3: number[] = [1, 2, 3, 4]

// Skip the second value using empty space
let [one, , three] = numbers3

console.log(one)
console.log(three)

//====================================================
// REST OPERATOR IN DESTRUCTURING
//====================================================

let numbers4: number[] = [1, 2, 3, 4, 5]

// firstNumber gets first value
// remainingNumbers gets all remaining values
let [firstNumber, ...remainingNumbers] = numbers4

console.log(firstNumber)
console.log(remainingNumbers)

//====================================================
// DEFAULT VALUES
//====================================================

let numbers5: number[] = [1]

// secondNumber does not exist
// so default value 100 will be used
let [firstNumber2, secondNumber = 100] = numbers5

console.log(firstNumber2)
console.log(secondNumber)

//====================================================
// OBJECT DESTRUCTURING
//====================================================

let user1 = {
    name: "Ali",
    age: 20
}

// Extract properties from object
let { name, age } = user1

console.log(name)
console.log(age)

//====================================================
// RENAMING VARIABLES
//====================================================

let user2 = {
    name2: "Ahmed",
    age2: 25
}

// Rename variable during destructuring
let { name2: userName } = user2

console.log(userName)

//====================================================
// DEFAULT VALUES IN OBJECTS
//====================================================

let user3 = {
    userName3: "John"
}

// age3 does not exist
// default value 18 will be assigned
let { userName3, age3 = 18 } = user3

console.log(userName3)
console.log(age3)

//====================================================
// NESTED OBJECT DESTRUCTURING
//====================================================

let user4 = {
    name4: "Abdullah",
    address: {
        city: "Faisalabad",
        country: "Pakistan"
    }
}

// Extract nested object property
let {
    address: { city }
} = user4

console.log(city)

//====================================================
// DESTRUCTURING IN FUNCTION PARAMETERS
//====================================================

type User = {
    name: string
    age: number
}

// Destructuring directly inside parameters
function printUser({ name, age }: User): void {
    console.log(name)
    console.log(age)
}

printUser({
    name: "Ali",
    age: 20
})

//====================================================
// ARRAY DESTRUCTURING WITH FUNCTION RETURN
//====================================================

// Tuple return type
function getData(): [string, number] {
    return ["Ali", 20]
}

// Destructure returned array
let [userName2, userAge] = getData()

console.log(userName2)
console.log(userAge)

//====================================================
// REAL-WORLD REACT EXAMPLE
//====================================================

// Example only (React syntax)

// const [count, setCount] = useState(0)

// count -> state value
// setCount -> function to update state

//====================================================
// REAL-WORLD API EXAMPLE
//====================================================

const response = {
    success: true,
    data: ["Ali", "Ahmed"]
}

// Extract values from API response
const { success, data } = response

console.log(success)
console.log(data)

//====================================================
// PROFESSIONAL PRODUCT EXAMPLE
//====================================================

type Product = {
    productName: string
    price: number
    inStock: boolean
}

const product: Product = {
    productName: "Laptop",
    price: 1000,
    inStock: true
}

// Object destructuring
const { productName, price } = product

console.log(productName)
console.log(price)

//====================================================
// MOST COMMON DESTRUCTURING PATTERNS
//====================================================

//----------------------------------
// Array Destructuring
//----------------------------------

let arr: number[] = [1, 2]

let [a, b] = arr

console.log(a)
console.log(b)

//----------------------------------
// Object Destructuring
//----------------------------------

let employee = {
    employeeName: "Ali",
    salary: 50000
}

let { employeeName, salary } = employee

console.log(employeeName)
console.log(salary)

//----------------------------------
// Rest Operator
//----------------------------------

let nums: number[] = [1, 2, 3, 4, 5]

let [start, ...rest] = nums

console.log(start)
console.log(rest)

