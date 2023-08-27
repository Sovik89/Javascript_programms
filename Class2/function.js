//simple function

function helloWorld(){
    return "Hello My dear friend:";
}

console.log(helloWorld(),"Sovik")

// function with parameter

function helloWorld(name){
    return "Hello My dear friend:"+name;//concatenation
}

console.log(helloWorld("Subhas"))


// function with parameters

function addition(a,b){
    return a+b;
}


console.log(addition(9,10))




//function Expression

let output=function (a,b){
    return a*b;
}

console.log("The product is: "+output(30,0.5));

//----------------------ES6-------------------------

//arrow function

const output2=(a,b)=>{
    return a/b;
}

console.log("The division result is: "+output2(30,0.5));

// shorter arrow function

var k=(a,b)=>(a%b);

console.log("The mod result is: ",k(30,14));

//------------Above are all pure function since the outputs of the functions are well defined

// ----------------IMpure function

//different output same input
console.log("value is:",Math.random())

/*
Output:
1st try: 0.12695386936210618;
2nd try: 0.023742339994402784
*/