// 1st console this keyword

// console.log(this);

//Output:{} --an empty object

// 2nd console.log(this) in a function

// function foo(){
//     console.log(this);
// }

// foo()

/*
Output: the global object(not to be confused with Window object):

<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 83.01049995422363,
      nodeStart: 6.333799958229065,
      v8Start: 13.317799925804138,
      bootstrapComplete: 58.260599970817566,
      environment: 30.740099906921387,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1695360588906.36
  },
  fetch: [AsyncFunction: fetch]
}


*/

//3rd scenario console.log(this is inside a anonymous function of an object)


// obj={
//     name:"Sovik",
//     age:33,
//     getThis: function(){
//         console.log(this)
//     }
// }

// obj.getThis();

//O/P: { name: 'Sovik', age: 33, getThis: [Function: getThis] }

// Conclusion :this bounds to the nearest parent obj based on how its called.=> function will give {} as O/P for getThis

// 4th Scenario - "this" keyword from a function that is inside a function inside an object
let obj2 = {
    name: "Shashwat",
    age: 26,
    testFunction: function foo() {
      console.log("Outside =>", this); // obj2
      function bar() {
        console.log("Inside =>", this); // Window Object
      }
  
      bar();
    }
  };

obj2.testFunction();