const fibonacci = function(str) {
    const n = parseInt(str);

    if (n === 0 ) {
        return 0;
    }
    
    if (n === 1) {
        return 1;
    }
    if (n < 0) {
        return 'OOPS';
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(-4));

// Do not edit below this line
module.exports = fibonacci;
