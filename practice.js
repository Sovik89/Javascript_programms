function Person(name) {
  this.name = name;
  this.introduceSelf = ()=> {
    console.log("Hi! I'm: "+this.name);
  };
}


const frankie=new Person("Frankie");

console.log(frankie.name);
console.log(frankie.introduceSelf());

function Person1(_name) {
    this._name = _name;
    this._introduceSelf = ()=> {
      console.log("Hi! I'm: "+this._name);
    };
}

const ginny=new Person1("Ginny");

console.log(ginny._name);
console.log(ginny._introduceSelf());