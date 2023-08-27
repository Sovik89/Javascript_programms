/*
Datatypes:
1. primitives : string,number,boolean,undef,null
2. non-primitive: array,object,symbol

*/

//undef

let a=null;

console.log(a)


//Set

const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false

//if else
if (a===b){
    console.log("Great");
}else{
    console.log("Bummer");
}

//for -- it can be used for number,string,boolean,array,object
for(let a=0;a<5;a++){
    console.log(a);
}