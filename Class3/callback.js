// Callback function

//_displayResultWithMessage and _displayResult are callback functions

// This is also a perfect example of function hoisting

/*

function displayResultWithMessage(result) {
    console.log("Answer to your equation was: ", result);
}

function displayResult(result, _displayResultWithMessage) {
    _displayResultWithMessage(result);
}

function calculateSum(a, b, _displayResult) {
    let sum = a + b;
    _displayResult(sum, displayResultWithMessage);
}

calculateSum(1, 2, displayResult);

*/

// Example 2 with product

/*
function humanReadableDisplay(result){
    console.log("The product is: "+result)
}

function productResult(product,_humanReadableDisplay){
    _humanReadableDisplay(product);//_humanReadableDisplay is the callbackfunction

}

function calculateProd(a,b,_productResult){
    let c=a*b
    _productResult(c,humanReadableDisplay)//_productResult is the callbackfunction
}

calculateProd(3,4,productResult)//We are Invoking calculateProd function

*/

// Example 3 with returning the positive values, Example is with shorthand of arrow function

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
//const posNumbers = removeNeg(myNumbers, (x) => (x >= 0));//the arrow function is the callback function
// Same example as above with normal function
const posNumbers = removeNeg(myNumbers, callback);
// Display Result
console.log(posNumbers)

function callback(x){
    if (x>=0){
        return true//Returning truthly values
    }else{
        return false
    }
}

// Keep only positive numbers
function removeNeg(numbers, _callback) {
  const myArray = [];
  for (const x of numbers) {
    if (_callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}



