describe("Fibonacci", function() {
  var Fibonacci = require('../../lib/fibonacci/Fibonacci');
  var fibonacci;

  beforeEach(function() {
    fibonacci = new Fibonacci();
  });

  describe("sequence", function() {
    it("should say that the 0th number is 0", function() {
      expect(fibonacci.sequence(0)).toEqual(0);
    });
    it("should say that the 1st number is 1", function() {
      expect(fibonacci.sequence(1)).toEqual(1);
    });
    it("should say that the 2nd number is 1", function() {
      expect(fibonacci.sequence(2)).toEqual(1);
    });
    it("should say that the 3rd number is 2", function() {
      expect(fibonacci.sequence(3)).toEqual(2);
    });
    it("should say that the 4th number is 3", function() {
      expect(fibonacci.sequence(4)).toEqual(3);
    });
    it("should say that the 5th number is 5", function() {
      expect(fibonacci.sequence(5)).toEqual(5);
    });
    it("should say that the 6th number is 8", function() {
      expect(fibonacci.sequence(6)).toEqual(8);
    });
    it("should say that the 7th number is 13", function() {
      expect(fibonacci.sequence(7)).toEqual(13);
    });
    it("should say that the 42th number is 267914296", function() {
      expect(fibonacci.sequence(42)).toEqual(267914296);
    });
  });
});
