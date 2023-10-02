/*unction throttle(func,delay){
    let isThrottled=false;

    return function(){
        if(!isThrottled){
            func();
            isThrottled=true;

            setTimeout(()=>{
                isThrottled=false;

            },delay);
        }
    };
}

function logmessage(message){
    console.log(message);
}

const throttleFunction=throttle(logmessage,500);

throttleFunction("Hello")

setTimeout(()=>{
    throttleFunction("World");
},200);

setTimeout(()=>{
    throttleFunction("!");
},400);*/

function debounce(func,delay){
    let timeOutId;

    return function(){
        clearTimeout(timeOutId);
        timeOutId=setTimeout(func,delay);
    };
}

function logMessage(){
    console.log("Debounce function called");
}

const debounceFn=debounce(logMessage,200)

debounceFn();
debounceFn();
debounceFn();