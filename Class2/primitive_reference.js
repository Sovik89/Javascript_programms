//Reference Datatype

let arr1=[1,2,3,4,5]
let arr2=arr1

console.log("Before=> aar1:",arr1," arr2:",arr1);

arr1.push(6)

console.log("After=> aar1:",arr1," arr2:",arr1);


/*

Memory reference:

Before=> aar1: [ 1, 2, 3, 4, 5 ]  arr2: [ 1, 2, 3, 4, 5 ]
After=> aar1: [ 1, 2, 3, 4, 5, 6 ]  arr2: [ 1, 2, 3, 4, 5, 6 ]

*/

//Primitive DataType

let foo=10
let bar=foo


console.log("Before=> foo:",foo," bar:",bar);

foo++

console.log("Before=> foo:",foo," bar:",bar);

/* 
Memory reference:

Before=> foo: 10  bar: 10
Before=> foo: 11  bar: 10


*/