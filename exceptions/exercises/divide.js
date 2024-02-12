// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

function divide(numerator,denominator){
    let result;
    if(denominator === 0){
        throw Error("Attempted to divide by zero.");
    }
    result = numerator / denominator;
    return result;
}
console.log(divide(2,0));