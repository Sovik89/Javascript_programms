class Vehicle{
    constructor(type){
        this.type=type;
    }

    getInfo(){
        return "Vehicle type is: "+this.type;
    }

}

class Car extends Vehicle{
    
    constructor(name1,color,price,type){
        super(type);
        this.name1=name1;
        this.color=color;
        this.price=price;
    }

    

    getInfo(){
        
        return "The Car's name is "+this.name1+" color is: "+this.color+" Price is: "+this.price+" "+super.getInfo();
    }

    outInfo(){
        return{
            name_car:this.name1,
            car_color:this.color,
            car_price:this.price
        }
    }


}


let car1=new Car("Mercedes","Blue","$40.000","Electric");

console.log(car1.getInfo());
console.log(car1.outInfo());