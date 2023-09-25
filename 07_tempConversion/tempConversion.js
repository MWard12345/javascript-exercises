const convertToCelsius = function(Temp) {
  let converted=((((Temp-32)*5)/9)*10);
  let answer=Math.round(converted);
  return (answer/10);

};

const convertToFahrenheit = function(Temp) {
 let converted=(((Temp*1.8+32))*10);
let  answer=Math.round(converted);
 return (answer/10);
};



//f=temp*1.8+32
//c=(temp-32)*5/9

// let roundedNumber = 4.567.toFixed(2)
// let roundedNumber = Math.round(4.5)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
