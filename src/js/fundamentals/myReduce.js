Array.prototype.myReduce = function(fn, accumulator, context) {
  var acc = accumulator === undefined ? this[0] : accumulator;
  for (var i = 0; i < this.length; i++) {
    acc = fn.call(context, acc, this[i], i, this);
  }
  return acc;
};

var list = [{ a: 1 }, { a: 2 }];
var newData = list.myReduce(function(acc, val) {
  return acc + val.a;
}, 5);

console.log(newData);
