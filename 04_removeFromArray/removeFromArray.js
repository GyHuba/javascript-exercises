const removeFromArray = function (array, ...value) {
    let correctArray = [];

    array.forEach((element) => {
        if (!value.includes(element)) {
            correctArray.push(element)
        }
    })
    return correctArray

};

// Do not edit below this line
module.exports = removeFromArray;
