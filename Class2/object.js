// Objects are denoted as {} where there is key and values

const person={
    name:"Sovik",
    age:33
}

console.log(person)

console.log("person1.name: ",person.name)


const person2={
    fullname:{
        firstname:"Sovik",
        lastname:"Guha Biswas"
    },
    age:33
}
//ways of travelling

//1. dot notation
console.log("person2.lastname: ",person2.fullname.lastname)

// 2. bracket notation
console.log("person2.age: ",person2['age'])
console.log("person2.lastname: ",person2['fullname'].lastname)