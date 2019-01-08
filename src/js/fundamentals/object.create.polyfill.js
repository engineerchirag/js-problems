// PolyFill for Object.create function

if (!Object.create) {
  Object.create = function(O, Properties) {
    if (typeof O !== "object" || O === null) {
      return new TypeError();
    }
    var obj = new Object();
    obj.prototype = O;
    if (Properties !== undefined) {
      Object.defineProperties(O, Properties);
    }
    return obj;
  };
}
var newObj = Object.create(Object.prototype, {
  a: { value: 2, enumerable: true }
});

console.log(newObj);
