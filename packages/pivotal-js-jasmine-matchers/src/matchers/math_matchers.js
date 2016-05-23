module.exports = {
  toAlmostEqual() {
    return {
      compare(actual, expected, precision = 5) {
        const pass = jasmine.matchersUtil.equals(actual.toPrecision(precision), expected.toPrecision(precision));
        return {pass};
      }
    };
  }
};

