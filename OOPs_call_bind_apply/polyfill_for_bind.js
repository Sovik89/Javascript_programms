let name1={
    firstName:"Sovik",
    lastName:"Guha Biswas"
};

let printName=function(){
    console.log("Thie first name is: "+this.firstName+" and the last name is: "+this.lastName);
    //return "Thie first name is: "+this.firstName+" and the last name is: "+this.lastName;
}


//bind

let myPrintName=printName.bind(name1);

myPrintName();

/*-------------------------------------POLYFILL FOR BIND-------------------------------------------*/

