const fibonacci = function(F) {
    if (!isNaN(F)) {
        F = parseFloat(F); // Convert F to a number
      } else {};
    if (F < 1) { return "OOPS"} ;
    if (F <= 1) { return (1) };

          let fib1 = 0;
          let fib2 = 1;
          let fibN = 0;
      
          for (let i = 2; i <= F; i++) {
            fibN = fib1 + fib2;
            fib1 = fib2;
            fib2 = fibN;
          }
      
          return fibN;
        };
      
      
 



// check string and convert
// check neg and return "OOPS"
// run equation
// return result
// {F_{n}=F_{n-1}+F_{n-2}}
// Do not edit below this line
module.exports = fibonacci;
