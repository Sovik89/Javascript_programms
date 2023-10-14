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