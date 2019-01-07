function debounce(fn, time) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => fn.apply(context, args), time);
  };
}

console.log("Start");
var consoleLog = debounce(console.log, 5000);
for (var i = 0; i <= 100; i++) {
  consoleLog("Debounced Event: " + i);
}
console.log("Done");
