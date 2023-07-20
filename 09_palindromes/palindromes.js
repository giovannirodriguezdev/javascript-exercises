const palindromes = function (str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};
console.log(palindromes('level'));

// Do not edit below this line
module.exports = palindromes;
