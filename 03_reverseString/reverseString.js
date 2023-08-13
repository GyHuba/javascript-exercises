const reverseString = function(word) {
    let array = word.split("")
    let stringReverse = "";
    for(let i = array.length-1; i > -1; i--){
        stringReverse += array[i]
    }
    return stringReverse
};

// Do not edit below this line
module.exports = reverseString;
