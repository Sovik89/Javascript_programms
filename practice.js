// 

/*let arr=[1,2,3,4,5]

const [a,b,...rest]=arr


console.log(a,b,rest)

//O/P: 1,2,[3,4,5]*/

// var students={
//     name:"Dicky",
//     age:12,
//     address:"1 John Street",
//     city:"London",
//     country:"England",
// }
// console.log("Old students: "+students.name);
// var students={...students,name:"Robert"};
// console.log("New students: "+students.name);


/*----------------------------------MAP-----------------------------*/

// const arr=[1,2,3,4,5,6,7]

// //triple
// function tripple(x){
//     return x*3;
// }
// const arr3TImes=arr.map(tripple);

// console.log(arr3TImes);



// const arr2TImes=arr.map((x)=> x*2);

// console.log(arr2TImes);

// const numbers=[1,32,3,4,5,6]

// const sum2 = numbers.reduce((acc, curr, idx) => {
//     console.log("Accumulator:"+acc+" Current:"+curr+" Index:"+idx)
//     return acc + curr;
// }, 0);

// console.log(sum2, numbers);

// const numbers=[1,32,3,4,5,6]

// const max2 = numbers.reduce((acc, curr) => {
//     //console.log("Accumulator:"+acc+" Current:"+curr+" Index:"+idx)
//     if (acc<curr){
//         acc=curr;
//     }
//     return acc
// }, 0);

// console.log(max2, numbers);

// var students=[
//     {fname:"Dicky",lname:"Bird",age:32},
//     {fname:"Roger",lname:"Twose",age:32},
//     {fname:"David",lname:"Gower",age:42},
//     {fname:"Gordon",lname:"Greenidge",age:45
// ]

// let op=students.map((x)=> x.fname+" "+x.lname)

// console.log(op)


// var students=[
//     {fname:"Dicky",lname:"Bird",age:32},
//     {fname:"Roger",lname:"Twose",age:32},
//     {fname:"David",lname:"Gower",age:42},
//     {fname:"Gordon",lname:"Greenidge",age:45}
// ]

// let op={};
// op=students.reduce((acc,curr)=> {
//     if (acc[curr.age]){
//         acc[curr.age]++;
//     }else{
//         acc[curr.age]=1
//     }

//     return acc;
// },{})

// console.log(op)

// let op = students.filter((x)=>{

//     if (x.age<35){
//         return x;
//     }
// }).map(x=>x.fname);

// console.log(op);

// let op2=students.reduce((acc,curr,idx)=>{
//     let ageNew=0;
//     console.log(typeof(curr.age));
//     if (curr.age<=32){
//     acc.push(curr.age);
//     return acc;
//     }
// },[]);

// console.log(op2);

function debounce(cb,delay=0){
    let timerId;

    return function(){
        clearTimeout(timerId);
        timerId=setTimeout(cb,delay);
    }
}

function logMessage(msg){
    console.log(msg)
}

let debounceFn=function(msg){
    debounce(logMessage(msg),100);
}


debounceFn("Hello")
setTimeout(()=>debounceFn("World"),200)
setTimeout(()=>debounceFn("!"),400)


// function throttle(func,delay){
//     let isThrottled=false;
//     return function(msg){
//         if(!isThrottled){
//             func(msg);
//             isThrottled=true;
//             setTimeout(()=>{
//                 isThrottled=false;

//             },delay);
//         }
//     };
// }

// function logmessage(message){
//     console.log(message);
// }

// const throttleFunction=throttle(logmessage,500);

// throttleFunction("Hello");
// setTimeout(()=>{
//     throttleFunction("World");
// },200);
// setTimeout(()=>{
//     throttleFunction("!");
// },400);





