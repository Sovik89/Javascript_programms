
//---------------------1. Hoisting of var
console.log(foo)

var foo=10;

// O/P: undefined

// making hoisting work


foo=10;

console.log(foo)

var foo;

// Basically JS splits the declaration of the variable with its initialization and
// hoists the declaration on top based on its variable type(var is functional scope/global hence its hoisted to the top). 
//Thats why example 2 worked



//------------------2. Hoisting of let
//let is block scoped
console.log(foo1)

let foo1=10;

// O/P:
// ReferenceError: Cannot access 'foo1' before initialization

foo2=10

console.log(foo2)

let foo2;

// O/P:
// ReferenceError: Cannot access 'foo2' before initialization

//--------------------TDZ of let variable and hoisting for  const

let hunc=function(a,b){

console.log(x); 

// in this function scope for a let/const variable if the variable is referenced it throws a reference error
// The zone of reference of let/const variable before initialization is called Temporal Dead Zone(TDZ)
const x =100;

}

hunc(12,34)


//-----------------Hoisting for function

bar()//This is allowed this function is gettinng overloaded

function bar(){
    console.log("This is bar");
}

bar2();//not allowed

const bar2=()=>{

    console.log("This is bar"); 
}

// Function expressions in JavaScript 
// are not hoisted, unlike function declarations. You can't use function expressions before you create them:

