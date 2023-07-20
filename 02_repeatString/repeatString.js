
const repeatString = function(string, times) {
    let newString = "";

    for(let i = 0; i < 3; i++) {
        newString += string;
    }
    return newString;
};
console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
