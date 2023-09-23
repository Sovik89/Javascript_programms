'use strict'

// 1st console this keyword

// console.log(this);

//Output:{} --an empty object

// 2nd console.log(this) in a function

// function foo(){
//     console.log(this);
// }

// foo()

/*
Output: undefined: simply strict is not allowing it to get attached to the global object

*/

//3rd scenario console.log(this is inside a anonymous function of an object)


let obj={
    name:"Sovik",
    age:33,
    getThis: function(){
        console.log(this)
    }
}

obj.getThis();

//O/P: { name: 'Sovik', age: 33, getThis: [Function: getThis] }. If it was a default obj declaration it would be a Reference error



// 4th Scenario - "this" keyword from a function that is inside a function inside an object
// let obj2 = {
//     name: "Shashwat",
//     age: 26,
//     testFunction: function foo() {
//       console.log("Outside =>", this); // obj2
//       function bar() {
//         console.log("Inside =>", this); // Window Object
//       }
  
//       bar();
//     }
//   };

// obj2.testFunction();

/*

Outside => { name: 'Shashwat', age: 26, testFunction: [Function: foo] }
Inside => undefined

*/