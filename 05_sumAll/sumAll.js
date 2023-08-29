const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
        return "ERROR";
    }
    if (a < 0 || b < 0 ) { return "ERROR" }
    let sum = 0;
    let startno = 0;
    let endno = 0;

    if (a < b) {
        startno = a;
        endno = b;
    } else {
        startno = b;
        endno = a;
    }

    for (let i = startno; i <= endno; i++) {
        sum = sum + i;
    }

    return sum;
};




// check if number, check - return ERROR

// return asn

// Do not edit below this line
module.exports = sumAll;
