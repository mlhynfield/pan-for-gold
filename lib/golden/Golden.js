function Golden() {
}

Golden.prototype.ratio = function() {
  return(1.6180339887498948482);
};

Golden.prototype.closeEnough = function(firstNumber, secondNumber) {
  const givenRatio = firstNumber / secondNumber;
  const givenRatioToTenFigs = Number.parseFloat(givenRatio).toPrecision(10);
  const goldenRatioToTenFigs = Number.parseFloat(this.ratio()).toPrecision(10);
  const isCloseEnoughToGolden = givenRatioToTenFigs === goldenRatioToTenFigs;
  return isCloseEnoughToGolden;
};

module.exports = Golden;
