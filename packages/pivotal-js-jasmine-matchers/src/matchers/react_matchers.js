module.exports = {
  toHaveBeenRenderedWithProps(util, customEqualityTesters) {
    return {
      compare(actual, expected) {
        const displayClass = actual.displayName;
        const displayExpected = jasmine.pp(expected);

        return actual.prototype.render.calls.all().reduce((result, renderCall) => {
          result.pass = result.pass || util.equals(renderCall.object.props, jasmine.objectContaining(expected), customEqualityTesters);

          if (result.pass) {
            result.message = `Expected ${displayClass} not to have been rendered with props ${displayExpected}`;
          } else {
            result.actualCallProps += jasmine.pp(renderCall.object.props) + '\n';
            result.message = `Expected ${displayClass} to have been rendered with props ${displayExpected},\n but got ${result.actualCallProps}`;
          }
          return result;
        }, {
          pass: false,
          message: `Expected ${displayClass} to have been rendered with props ${displayExpected}, but it was never rendered`,
          actualCallProps: ''
        });
      }
    };
  }
};
