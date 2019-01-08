Array.prototype.mySome = function(fn, context) {
  for (var i = 0; i < this.length; i++) {
    if (fn.call(context, this[i], i, this)) {
      return true;
    }
  }
  return false;
};

var list = [1, 2, 3, 4, 5];

var result = list.mySome(function(item) {
  return item > 3;
});

console.log(result);
