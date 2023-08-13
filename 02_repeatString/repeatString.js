const repeatString = function (word, times) {
    if(times === 0){
        return "";
    }
    else if(times < 0){
        return "ERROR"
    }
    let theString;
    for (let i = times; i > 0; i--) {
        if (theString === undefined) {
            theString = word
        }
        else {
            theString = theString + `${word}`
        }
    }
    return theString
};

// Do not edit below this line
module.exports = repeatString;
