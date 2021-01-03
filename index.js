function Index() {
}

const http = require('http');

var Fibonacci = require('./lib/fibonacci/Fibonacci');
var Golden = require('./lib/golden/Golden');

var fibonacci = new Fibonacci();
var golden = new Golden();

const port = process.env.PORT || 3000;

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

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  console.log('We got a request!');
  res.end("Ratio of Fibonacci numbers is golden to 10 significant digits at position " + index.fibCloseEnoughToGolden());
});

server.listen(port, function() {
  console.log(`Server running on port ${port}`);
});
