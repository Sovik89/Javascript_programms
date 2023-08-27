// Callback function

//_displayResultWithMessage and _displayResult are callback functions

function displayResult(result, _displayResultWithMessage) {
    _displayResultWithMessage(result);
}

function displayResultWithMessage(result) {
    console.log("Answer to your equation was: ", result);
}



function calculateSum(a, b, _displayResult) {
    let sum = a + b;
    _displayResult(sum, displayResultWithMessage);
}

calculateSum(1, 2, displayResult);


// Example 2 with product



