Array.prototype.myMap = function(fn) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this));
  }
  return result;
};

var list = [1, 2, 3, 4, 5];

var newList = list.myMap(function(item) {
  return item * item;
});

console.log(newList);
