/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return ()=> "Hello World";
};

var f=createHelloWorld();
console.log(createHelloWorld())
console.log(f())// "Hello World"
