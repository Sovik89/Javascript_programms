// let car1 = {
//   name: "Alto",
//   color: "gray",
//   topSpeed: "120km/hr"
// };

// let car2 = {
//   name: "bmw",
//   color: "white",
//   topSpeed: "150km/hr"
// }


function car(name, color, topSpeed) {
    this.name = name;
    this.color = color;
    this.topSpeed = topSpeed;
    this.carInfo=()=>{
        return{
            name,color,topSpeed
        };
    }
  }
  
  const car1 = new car("Alto", "gray", "120km/hr");
  const car2 = new car("BMW", "white", "150km/hr");
  
  console.log(car1.carInfo())
  console.log(car2.carInfo())
  
  // ------
  
//   function phone(color, name, storage) {
//     this.color = color;
//     this.name = name;
//     this.storage = storage;
//     this.getInfo = function() {
//       console.log("My phone has the following specs: ", this.color, this.name, this.storage);
//     }
//   }
  
//   const phone1 = new phone("black", "nokia", "64GB");
//   const phone2 = new phone("white", "iphone", "256GB");
  
//   console.log(phone1.getInfo());