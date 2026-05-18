//==============
//Sort 
//==============

// The .sort() method is used to sort elements in an array.

// It can sort:

// - strings
// - numbers
// - objects
// - dates
// - custom values

// Important Concept:

// .sort() modifies the original array.
let val = ["Banana","Mango", "Apple"]
console.log(val.sort());


console.log(
    val.sort((a,b)=>{
        return a.localeCompare(b);
    })
);


//Ascending Order
let nume:number[] = [8,3,2,5,2,1];
console.log(
    nume.sort((a,b)=>{
        return a - b;
    })
);

//Desending Order

console.log(
    nume.sort((a,b)=>{
        return b - a;
    })
);



interface Product{
    name:string,
    price:number
}


let products:Product[] = [
    {name:"Phone", price:500},
    {name:"Laptop", price:1000},
    {name:"Tablet", price:300}
]

console.log(products.sort((a,b)=>{
    return a.price - b.price
}))



