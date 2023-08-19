const palindromes = function (word) {
    let wordArray = word.split('').filter(letter => (/[a-zA-Z]/).test(letter) || /[0-9]/.test(letter))
        for (let i = 1; i < wordArray.length + 1; i++) {
            if (wordArray[i - 1].toLowerCase() !== wordArray[wordArray.length - i].toLowerCase()) return false;
        }
        return true;

};

// Do not edit below this line
module.exports = palindromes;
