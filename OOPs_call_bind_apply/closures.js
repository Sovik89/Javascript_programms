function outerFunction(outerVariable){
    return{
        innerFunction:function(innerVariable){
            console.log("Outer function:=> "+outerVariable);
            console.log("Inner function:=> "+innerVariable);
        }
    }
}

outerFunction("outer").innerFunction("inner");

/*
O/P:Outer function:=> outer
Inner function:=> inner

*/