describe("Index", function() {
  var Index = require('../index.js');
  var index;

  beforeEach(function() {
    index = new Index();
  });

  describe("find position close enough to golden", function() {
    it("should return the Fibonacci position close enough to the golden ratio", function() {
      expect(index.fibCloseEnoughToGolden()).toEqual(24);
    });
  });
});
