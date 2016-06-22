exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var matchesPattern = str.match(/\d+/g);
  if (matchesPattern != null) {
     return true;
  } else {
    return false;
    }
  },

  containsRepeatingLetter : function(str) {
  return /(\D)\1+/.test(str);
  },

  endsWithVowel : function(str) {
  return /[aeiouAEIOU]$/.test(str);
  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },

  isUSD : function(str) {

  }
};
