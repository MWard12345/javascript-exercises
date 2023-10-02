const palindromes = function (string) {

    const arrayWithSpaces = [...string];
    const arrayWithoutSpaces = arrayWithSpaces.map(element => element.trim());
    const arrayWithoutPunctuation = arrayWithoutSpaces.map(element => element.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''));
    const arrayWithoutNumbers = arrayWithoutPunctuation.filter(element => typeof element !== "number");
    const cleanString= arrayWithoutNumbers.join("").toLowerCase();
    const reversedString = cleanString.split('').reverse().join('');

if (reversedString === cleanString) { return true;
} else { return false ;
}
};

// Do not edit below this line
module.exports = palindromes;
