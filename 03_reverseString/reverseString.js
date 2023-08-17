const reverseString = function( word ) {
    const charArray = word.split(""); 
    const rArray = charArray.slice().reverse();
    const rWord = rArray.join("");
    return rWord;
};


// take string and reverse
//how long is string
//split into array
//
// Do not edit below this line
module.exports = reverseString;
