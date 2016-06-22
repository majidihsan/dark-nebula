exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    isPrime : function(num) {
      if (isNaN(num) || !isFinite(num) || num%1 || num<2) return false;
      if (num%2==0) return (num==2);
      var m=Math.sqrt(num);
      for (var i=3;i<=m;i+=2) {
        if (num%i==0) return false;
      }
      return true;
  },

  arraySum : function(array) {
   return array.reduce(function(a, b) {
     return a + b;
   });
  },

  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
     if (num % 3 == 0 && num % 5 == 0 ) {
       return "fizzbuzz";
     }
     else if (num % 3 == 0){
       return "fizz";
     }

     else if (num % 5 == 0) {
       return "buzz";
     }

     else if (typeof num !== typeof 1) {
       return false;
     }

     else {
       return num;
     }
   }
 };
