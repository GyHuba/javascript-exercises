const fibonacci = function (number) {
    let result = [1]
    if (Number(number) < 0 || (/[a-zA-Z]/).test(number)) {
        return "OOPS"
    }
    else if (Number(number) < 3) return 1;
    else {
        for (let i = 1; i < Number(number) - 1; i++) {
            if (result.length < 2) {
                result.push(result[0])
            }
            else {
                result.push(result[0] + result[1]);
                result.shift();
            }
        }
        return (result[0] + result[1]);
    }
};

// Do not edit below this line
module.exports = fibonacci;
