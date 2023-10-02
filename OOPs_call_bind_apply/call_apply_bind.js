
  // let student = {
  //   firstName: "Peter",
  //   lastName: "Parker",
  //   age: 18,
  //   getEmail: function() {
  //     console.log("this obj inside student =>", this);
  //     console.log(`${this.firstName?.toLowerCase()}.${this.lastName?.toLowerCase()}@avengers.com`);
  //   }
  // }
  
  let teacher1 = {
    firstName: "Tony",
    lastName: "Stark",
    age: 42,
  };
  
  let teacher2 = {
    firstName: "Steve",
    lastName: "Rogers",
    age: 80,
  };

  let getEmailFn1=function() {
    console.log(`${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@avengers.com`);
  };
  
  let getEmailFn2=function(sub1, sub2) {
    console.log(`My email id is ${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@avengers.com and the subjects I teach are ${sub1} and ${sub2}`);
  };
  
  //function borrowing

  //call
  getEmailFn1.call(teacher1);
  ///O.P:tony.stark@avengers.com
  getEmailFn2.call(teacher2, "Shield throwing", "Leadership");
  //O:P:My email id is steve.rogers@avengers.com and the subjects I teach are Shield throwing and Leadership
  getEmailFn2.call(teacher1,[ "Defence", "Leadership"]);
  //O/P:My email id is tony.stark@avengers.com and the subjects I teach are Defence,Leadership and undefined
  
  //apply
  getEmailFn2.apply(teacher1,[ "Defence", "Leadership"]);
  //O:P:My email id is tony.stark@avengers.com and the subjects I teach are Defence and Leadership

  //bind method

  let myEmailFunction=getEmailFn2.bind(teacher1,"Shield throwing", "Leadership")
//structure after bind
  console.log(myEmailFunction)
/*
O:p:nodejs: [Function: bound getEmailFn2]
browser: 
ƒ (sub1, sub2) {
    console.log(`My email id is ${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@avengers.com and the subjects I teach are ${sub1} and ${sub2}`);
  }

*/
//invoke after bind

myEmailFunction()
/*
O.P:My email id is tony.stark@avengers.com and the subjects I teach are Shield throwing and Leadership
*/





  
  
  // Call
  // student.getEmail.call(teacher);
  
  // Using Call with getEmailFn
 
  // getEmailFn.call(teacher);
  
  // teacher.getEmail();