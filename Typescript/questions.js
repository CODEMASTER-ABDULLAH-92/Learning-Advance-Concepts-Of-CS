// ✅ A. Variables & Data Types (10 Problems)
// 	1.	Swap two variables without using a third variable.
// 	2.	Convert a number to a string manually.
// 	3.	Convert a string to a number manually.
// 	4.	Check if a value is an array without using Array.isArray.
// 	5.	Check if two variables point to the same reference.
// 	6.	Identify the type of a variable without using typeof.
// 	7.	Create 5 variables and predict which ones are primitives vs references.
// 	8.	Explain the difference between null and undefined using examples.
// 	9.	Convert "123abc" into a number safely.
// 	10.	Explain why [] == false is true.


// ✅ B. Operators (10 Problems)
// 	11.	Use the ternary operator to assign grades.
// 	12.	Create your own AND logic using &&.
// 	13.	Create your own OR logic using ||.
// 	14.	Use +, -, *, /, % in a mini-calculator.
// 	15.	Build a function that checks if a number is between 2 values.
// 	16.	Solve string concatenation vs template literals.
// 	18.	Build a discount calculator.
// 	20.	Do arithmetic on booleans (true + 2).

// ✅ C. If/Else & Logical Thinking (15 Problems)
// 	21.	Leap year checker.
// 	22.	Find the largest of 3 numbers.
// 	23.	Check if a string contains vowels.
// 	24.	Validate password strength.
// 	25.	Count capital letters in a string.
// 	26.	Determine if a number is positive, negative, or zero.
// 	27.	Categorize age groups.
// 	28.	Check if two strings are anagrams.
// 	29.	Build a simple login logic.
// 	30.	Convert a number to day name (1 = Monday).
// 	31.	Detect palindrome words.
// 	32.	Check if a number is divisible by 3 AND 5.
// 	33.	Write FizzBuzz (three variations).
// 	34.	Categorize marks into grade bands.
// 	35.	Check if a character is a vowel, consonant, or something else.

// ✅ D. LOOPS (for, while, for-of) — 20 Problems
// 	36.	Reverse a string manually.
// 	37.	Count digits in a number.
// 	38.	Count occurrences of a character in a string.
// 	39.	Sum numbers from 1 to 100.
// 	40.	Find factorial of a number.
// 	41.	Print multiplication table.
// 	42.	Remove duplicates manually (no sets).
// 	43.	Print each character of a string.
// 	44.	Generate Fibonacci sequence.
// 	45.	Reverse an array manually.
// 	46.	Find max number in an array.
// 	47.	Find min number in an array.
// 	48.	Count even/odd numbers in an array.
// 	49.	Extract numbers out of a mixed array.
// 	50.	Convert array of strings to uppercase manually.
// 	51.	Join array items manually (without .join).
// 	52.	Print pattern pyramids (*)
// 	53.	Count total words in a string.
// 	54.	Sum all digits of a number.
// 	55.	Convert minutes into hours/minutes.

// ✅ E. Functions (15 Problems)
// 	56.	Build a function that returns the square of a number.
// 	57.	Build a function that returns the reverse of a string.
// 	58.	Write a function that returns the sum of an array.
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

// ✅ F. Arrays (15 Problems)
// 	71.	Sort numbers ascending + descending.
// 	72.	Sort array of objects by name.
// 	73.	Sort array of objects by age.
// 	74.	Extract names from an array of objects.
// 	75.	Convert array of objects into single object using reduce.
// 	76.	Filter users older than 30.
// 	77.	Filter products cheaper than 1000.
// 	78.	Transform product objects (add new fields).
// 	79.	Count how many times each item appears (frequency map).
// 	80.	Remove null/undefined values.
// 	81.	Flatten nested arrays.
// 	82.	Chunk array into smaller arrays.
// 	83.	Find common elements between two arrays.
// 	84.	Find difference between arrays.
// 	85.	Convert array of key-value pairs into an object.

// ✅ G. Objects (15 Problems)
// 	86.	Loop through object keys and values.
// 	87.	Count total keys in an object.
// 	88.	Convert object to array manually.
// 	89.	Convert array to object manually.
// 	90.	Merge 2 objects without Object.assign.
// 	91.	Deep clone nested object.
// 	92.	Compare two objects for equality.
// 	93.	Extract nested property safely.
// 	94.	Remove key from object.
// 	95.	Rename object keys.
// 	96.	Combine object arrays based on ID.
// 	97.	Group objects by a field (category).
// 	98.	Convert MongoDB-like documents into UI data.
// 	99.	Sum all numeric values in an object.
// 	100.	Validate form input using an object.

// 🔥 SECTION 2 — REAL-WORLD CORE CONCEPT PROJECT

// You asked for a “core concepts only” real project guide.
// So here it is — something that will actually prepare you for MERN.

// ⭐ PROJECT: Customer Management System (NO frameworks, just logic)

// You will build a real system using ONLY:
// 	•	variables
// 	•	loops
// 	•	if/else
// 	•	functions
// 	•	arrays
// 	•	objects

// No React
// No Node
// No libraries
// Pure JavaScript.

// 🎯 FEATURES YOU MUST BUILD

// 1️⃣ Add a Customer

// Customer =

// {
//     id: number,
//     name: string,
//     age: number,
//     city: string,
//     purchases: number[]
// }

// 2️⃣ Update Customer

// Change:
// 	•	name
// 	•	age
// 	•	city

// 3️⃣ Delete Customer

// 4️⃣ List Customers
// 	•	list all
// 	•	list by city
// 	•	list by age > 30
// 	•	list customers with total purchases > 1000

// 5️⃣ Search

// Search by:
// 	•	name
// 	•	city

// 6️⃣ Analytics (Core Logic)

// Use loops + reduce:
// 	•	Total customers
// 	•	Average customer age
// 	•	Total revenue
// 	•	Highest spending customer
// 	•	Group customers by city
// 	•	Sort by name
// 	•	Sort by total purchase

// 🔥 WHAT THIS PROJECT WILL TEACH YOU

// Every feature uses:
// 	•	variables
// 	•	if/else
// 	•	loops
// 	•	arrays
// 	•	objects
// 	•	functions
// 	•	logical thinking

// This will turn your fundamentals into muscle memory.