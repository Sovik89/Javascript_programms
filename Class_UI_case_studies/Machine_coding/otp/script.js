let inputArr=document.querySelectorAll(".input");
let inputContainer=document.querySelector(".inputs");

//console.log(inputArr);

inputContainer.addEventListener("input",(e)=>{
    if(isNaN(e.target.value)==true){
        e.target.value="";
        return;
    }

    let target=e.target.nextElementSibling;
    if(target){
        target.focus();//if target exist then focus
    }
})

inputContainer.addEventListener("keydown",(e)=>{
    if (e.key=="Backspace"|| e.key=="Delete"){
        e.target.value="";
        let target1=e.target.previousElementSibling;
        if(target1){
            target1.focus();
        }
        
    }
})

