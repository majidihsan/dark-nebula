exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
   var word = "";
   for (i = 0; i < str.length; i++) {
     if (str[i] !== str[i - 1] && str[i] !== str[i + 1]) {
       word += str[i];
     } else if (str[i] !== str[i -1]) {
       word += str[i].repeat(amount):
      }
     }
   }
   return word;
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
   return str.split('').reverse().join('');
  }
};
