/*
Variables in java scipt


*/ 


/*x=56;

console.log("Hello in",x);

var y="Shashwat"

var y="Sovik"

console.log("J'mpelle",y);*/


// ES6 var is replaced by let and const


//This is reinitializing but not re declaring
let y="Shashwat"
y="Sovik"

console.log("J'mpelle",y);

//ECMAScript 2015 is the latest standard

//Const

/*const z="Shashwat"
z="Sovik"

console.log("J'mpelle",y);*/

//error
/*
TypeError: Assignment to constant variable.
    at Object.<anonymous> (D:\Python\1. Python detailed--Latest\Javascript_programms\variables.js:33:2)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

*/

//Typeof

//string
console.log(typeof(y))

let z=12.5
z=10.5
//number
console.log(typeof(z))

//object
let zv={
    "key":"value"
}

console.log(zv["key"]);


let x=false
x=true
//boolean
console.log(typeof(x))




