function movieForWeekend(){
    movies=["A","B","C","D"]
    return movies[3]

}

//If we return movies[4] the return value is undefined rather than Array index out of bound

//Function Execution/invokation
const movie=movieForWeekend()

console.log(movie)