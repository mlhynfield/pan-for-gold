function Index() {
}

var Fibonacci = require('./lib/fibonacci/Fibonacci');
var Golden = require('./lib/golden/Golden');

var fibonacci = new Fibonacci();
var golden = new Golden();

Index.prototype.fibCloseEnoughToGolden = function() {
  // Iterate through the Fibonacci sequence,
  for (let i = 1; i < 30 && !closeEnough; i++) {
    // stopping when the ratio of sequential pairs matches the golden ratio to 10 significant digits,
    var closeEnough = golden.closeEnough(fibonacci.sequence(i+1), fibonacci.sequence(i));

    // printing the position reached
    if (closeEnough) {
      return(i);
    }
  }
}

module.exports = Index;
var index = new Index();

console.log("Close enough at position " + index.fibCloseEnoughToGolden());
