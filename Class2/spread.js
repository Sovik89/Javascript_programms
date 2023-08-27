const arr1=[1,2,3]

let arr2=[...arr1,5,6,7,8]//concatenation of arr2=arr1+something else

console.log(arr2)

let arr3=[34,56, ...arr2,78,46]

console.log(arr3)



// spread operator with object

let obj1={a:1,b:2}

let obj2={...obj1,h:5,j:6}

console.log(obj2)

// O/P:{ a: 1, b: 2, h: 5, j: 6 }

let obj3={x:89,z:7}

//
let obj4={...obj1,...obj3}

console.log(obj4)

//
const obj5={...obj1,obj3}

console.log(obj5)

//Note similar key:value pai will override with ltest val

//Spread operator is used for the deep copy

let arr_one=[1,2,3,4]

//this is called destructuring
let arr_two=[...arr_one]

console.log("Before pushing value:\n");
console.log("Arr1:" +arr_one);
console.log("Arr12:" +arr_two);

arr_one.push(5)
console.log("After pushing value:\n");
console.log("Arr1:" +arr_one);
console.log("Arr2:" +arr_two);

//destructuring in function

function doSometing(...anything){
    console.log(anything);
}

doSometing(1,2,3,4,5)

//O:p:[ 1, 2, 3, 4, 5 ]

