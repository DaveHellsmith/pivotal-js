module.exports = {
  toHaveBeenRenderedWithProps(util, customEqualityTesters) {
    return {
      compare(actual, expected) {
        const displayClass = actual.displayName;
        const displayExpected = jasmine.pp(expected);

        return actual.prototype.render.calls.all().reduce((result, renderCall) => {
          const {children, ...propsWithoutChildren} = renderCall.object.props;
          result.pass = result.pass || util.equals(propsWithoutChildren, jasmine.objectContaining(expected), customEqualityTesters);

          if (result.pass) {
            result.message = `Expected ${displayClass} not to have been rendered with props ${displayExpected}`;
          } else {
            result.actualCallProps += jasmine.pp(propsWithoutChildren) + '\n';
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
  },

  toHaveBeenRenderedWithExactProps(util, customEqualityTesters) {
    return {
      compare(actual, expected) {
        const displayClass = actual.displayName;
        const displayExpected = jasmine.pp(expected);

        return actual.prototype.render.calls.all().reduce((result, renderCall) => {
          const {children, ...propsWithoutChildren} = renderCall.object.props;
          result.pass = result.pass || util.equals(propsWithoutChildren, expected, customEqualityTesters);

          if (result.pass) {
            result.message = `Expected ${displayClass} not to have been rendered with props ${displayExpected}`;
          } else {
            result.actualCallProps += jasmine.pp(propsWithoutChildren) + '\n';
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
