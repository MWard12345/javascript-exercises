const leapYears = function(Year) {
    if ((Year/4 && Year/100 && Year/400 %1===0)) return true;
    if ((Year/4 && Year/100 %1 ===0)) return false;
    if ((Year/4) %1 ===0) return true;
    else return false; 
};

    

//(Number.isInteger(5)
//number % 1 === 0
// if year /4 =is intergetr & /100 is interger &/400 is interger = true
// if year /4 /100 /400 return true
// if year /4 /100 return false
// if uear /4 return true




// Do not edit below this line
module.exports = leapYears;
