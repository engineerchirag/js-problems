Array.prototype.myEvery = function(fn, context) {
  for (var i = 0; i < this.length; i++) {
    if (!fn.call(context, this[i], i, this)) {
      return false;
    }
  }
  return true;
};

var list = [1, 2, 3, 4, 5, 6];

var result = list.myEvery(function(item) {
  return item < 10;
});

console.log(result);
