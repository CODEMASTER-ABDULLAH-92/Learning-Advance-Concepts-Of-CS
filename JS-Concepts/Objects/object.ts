//===========================
// Objects in TypeScript
//===========================


// 1. An object is a collection of key-value pairs.
// 2. Objects are used to store related data together.

type UserData = {
    readonly id :string,
    name:string,
    age:23,
    roll_num?:number
}
// ==========================
// Readonly Properties
// ==========================

// Cannot be modified.

const userObj:UserData = {
    id:"23",
    name:"Muhammad Abdullah",
    age:23
}

// Accessing the value using the dot notation
console.log(userObj.age)
// Accessing the value using the bracket notation 
console.log(userObj["age"])

//Updating the value 

userObj.name = "Abdullah"



// nested objects 

type nestedObj = {
    name: string,
    location:{
        currentAddress:string,
        perivousAddress:string
    }
}

const nn:nestedObj = {
    name:"Muhammad Abdullah",
    location:{
        currentAddress:"Khurrianwala",
        perivousAddress:"Amritsar"
    }
}
console.log(nn.location.currentAddress);

// =========================
// Destructuring Objects
// =========================

type PersonType = {
    nickName:string,
    age:number
}

const Person:PersonType = {
    nickName:"BulBul",
    age:23
}

const {nickName, age} = Person;

console.log(nickName);
console.log(age);



// =======================
// Object Methods
// =======================


// ========================
// 1. Object.keys()
// It gives the keys of the object

console.log(Object.keys(Person));


// ========================
// 2. Object.values()
// It gives the values of the object 

console.log(Object.values(Person));

// =======================
// 3. Object.entries
// It give the array of the complete object.
console.log(Object.entries(Person));

