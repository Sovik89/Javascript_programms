let numbers = [10, 2, 3, 4, 50];

// MAP FUNCTION
const multipliedBy2 = numbers.map((val) => {
    return 2 * val;//kind'a like for each
});

console.log(multipliedBy2, numbers);

// FILTER FUCNTION
const filteredOddNumbers = numbers.filter((val) => {
    if (val % 2 == 0) {
        return true;
    }else{
        return false;
    }
    //return val;
});



console.log(filteredOddNumbers, numbers);

// REDUCE FUNCTION
const sum = numbers.reduce((acc, curr, idx) => {
    return acc + curr;
}, 0);

console.log(sum, numbers);

//REDUCE FUNCTION using index

const sum2 = numbers.reduce((acc, curr, idx) => {
    console.log("Accumulator:"+acc+" Current:"+curr+" Index:"+idx)
    return acc + curr;
}, 0);

console.log(sum, numbers);
