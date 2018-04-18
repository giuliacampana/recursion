// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var arrString;
  if (Array.isArray(obj)) {
    arrString = obj.map(function(item) {
      return stringifyJSON(item);
    });
    return '[' + arrString + ']';
  }

  if (obj && typeof(obj) === 'object') {
    var objString = [];
    for (var key in obj) {
      if (typeof(obj[key]) === 'function' || obj[key] === undefined) {
        continue;
      }
      objString.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + objString.join() + '}';
  }

  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  return '' + obj;
};
