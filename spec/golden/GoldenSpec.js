describe("Golden", function() {
  var Golden = require('../../lib/golden/Golden');
  var golden;

  beforeEach(function() {
    golden = new Golden();
  });

  describe("ratio", function() {
    it("should return the golden ratio to 20 significant digits", function() {
      expect(golden.ratio()).toEqual(1.6180339887498948482);
    });
  });
  // the ratio of two numbers matches the golden ratio to 10 significant digits
  describe("close enough", function() {
    it("should return false if the ratio of two given numbers doesn't match the golden ratio to 10 significant digits", function() {
      const firstNumber = 13;
      const secondNumber = 8;
      expect(golden.closeEnough(firstNumber, secondNumber)).toBeFalse();
    });
    it("should return true if the ratio of two given numbers matches the golden ratio to 10 significant digits", function() {
      const firstNumber = 44945570212853;
      const secondNumber = 27777890035288;
      expect(golden.closeEnough(firstNumber, secondNumber)).toBeTrue();
    });
  });
});
