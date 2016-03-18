require('jasmine_dom_matchers');

beforeEach(() => {
  jasmine.addMatchers(require('./matchers/math_matchers'));
  jasmine.addMatchers(require('./matchers/react_matchers'));
  jasmine.addMatchers(require('./matchers/request_matchers'));
});

afterAll(() => {
  delete require.cache[require.resolve(__filename)];
});
