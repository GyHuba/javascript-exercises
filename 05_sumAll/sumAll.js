const sumAll = function(numberOne, numberTwo) {
    let finalSum = numberOne
    if(numberOne < 0 || numberTwo < 0 || typeof numberOne !== "number" ||typeof numberTwo !== "number"){
        return "ERROR"
    }
    if(numberOne < numberTwo){
        for(let i = numberOne; i < numberTwo; i++){
            finalSum = finalSum + i+1
        }
    }
    else if(numberOne > numberTwo){
        for(let i = numberOne; i > numberTwo; i--){
            finalSum = finalSum + i-1
        }
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
