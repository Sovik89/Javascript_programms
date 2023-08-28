// Callback function, passed as a parameter in the higher order function
// again a good example of function hoisting

/*
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);

*/
//-----------------------------Example 1-----------------------

/* 

Now, as you can see in the below code, we have only written a single function calculate() 
to calculate the circumference and diameter of the circle. We only need to write the logic and pass it to calculate() and the function will do the job.

The code that we have written using HOFs is concise and modular. Each function is doing its 
own job and we are not repeating anything here.

Suppose in the future if we want to write a program to calculate the area of the circle.
 We can simply write the logic to calculate the circumference and pass it to the calculate() function.
*/

// let radii=[1,2,3,4];


// function calculateDiameter(radius){
//     return radius*2;

// }

// function calculateCicumference(radius){
//     return calculateDiameter(radius)*Math.PI;

// }

// //Logica can be depicted as circumference or diameter as necessary

// function calculate(_radii,logic){
//     const output=[];
//     for(let i=0;i<_radii.length;i++){
//         output.push(logic(radii[i]));
//     }

//     return output
// }

// const arrayDia=calculate(radii,calculateDiameter)
// const arrayCir=calculate(radii,calculateCicumference)

// console.log("Diameter array; "+arrayDia)
// console.log("Circumference array; "+arrayCir)


//-----------------------------Example 2-------------------

function person() {

    function getFullName(fName, lName) {
        return fName + " " + lName;
    }

    return getFullName;
}

const hof = person();
// If not invoked with parameter undefined as JS will assign undefined to the parameters during memory allocation phase. Inthis case it will return getFullNmae

console.log(hof)
// Output: [Function: getFullName]
console.log(hof("Anil", "Kumar"));
//Now since it is invoked with parameter Output:Anil Kumar


