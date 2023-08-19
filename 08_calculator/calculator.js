const add = function (numberOne, numberTwo) {
  return numberOne + numberTwo;
};

const subtract = function (numberOne, numberTwo) {
  return numberOne - numberTwo;
};

const sum = function (array) {
  let result = 0;
  !array.forEach((number) => {
    result = result + number;
  }
  )
  return result;
};

const multiply = function (array) {
  let result = 0;
  !array.forEach((number) => {
    if (result === 0) {
      result = number;
    }
    else {
      result = result * number;
    }
  }
  )
  return result;
};

const power = function (numberOne, numberTwo) {
  let result = numberOne;
  for(let i = 0; i < numberTwo -1; i++){
    result = result * numberOne
  }
  return result;
};

const factorial = function (number) {
  if(number === 0){
    return 1;
  }
  let result = 1;
  for(let i = 1; i < number+1; i++){
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
