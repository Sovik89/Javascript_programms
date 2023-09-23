spanNumberDisplay=document.querySelector("span#number");
incrementByInput=document.querySelector("input#increment");
//console.log(spanNumberDisplay.innerText);
//console.log(incrementByInput.value);
incrementBtn=document.querySelector("button#add");
decreaseBtn=document.querySelector("button#subtract");
resetBtn=document.querySelector("button#reset");

incrementBtn.addEventListener("click",()=>{
    //console.log("Current Span value",spanNumberDisplay.innerText);
    let tempVal=parseInt(spanNumberDisplay.innerText)+parseInt(incrementByInput.value);
    //console.log("Incremented value ",tempVal);
    spanNumberDisplay.innerText=tempVal.toString();

})

decreaseBtn.addEventListener("click",()=>{
    //console.log("Current Span value",spanNumberDisplay.innerText);
    let tempVal=parseInt(spanNumberDisplay.innerText)-parseInt(incrementByInput.value);
    //console.log("Incremented value ",tempVal);
    spanNumberDisplay.innerText=tempVal.toString();
})

resetBtn.addEventListener("click",()=>{
    spanNumberDisplay.innerText="0";
})