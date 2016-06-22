exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
   while (arr.indexOf(item) != -1) {
     arr.splice(arr.indexOf(item), 1);
   }
   return arr;
  },

  append : function(arr, item) {
   arr.push(item);
   return arr;
  },

  truncate : function(arr) {
   arr.pop();
   return arr;
  },

  prepend : function(arr, item) {
   arr.unshift(item);
   return arr;
  },

  curtail : function(arr) {
   arr.shift();
   return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
   var count = 0
   for(var i = 0; i < arr.length; i++) {
     if (arr[i] == item) {
       count++;
     }
   }
   return count;
  },

  duplicates : function(arr) {
    var seen = {};
    var duplicates = [];
    var len = arr.length;
    for (i = 0; i < len; i++) {
     seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }
    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        duplicates.push(parseInt(item));
      }
    }
  return duplicates;
},


  square : function(arr) {
    var square = [];
    for (i = 0; i < arr.length; i++) {
    square.push(arr[i] * arr[i])
    }
    return square;
  },

  findAllOccurrences : function(arr, target) {
    var indices = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
      indices.push([i])
       }
     }
  return indices;
  }
};
