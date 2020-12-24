function Fibonacci() {
}

Fibonacci.prototype.sequence = function(position) {
  if ( position === 0 ) {
    return(0);
  }
  if ( position === 1 ) {
    return(1);
  }
  return(this.sequence(position - 1) + this.sequence(position - 2));
};

module.exports = Fibonacci;
