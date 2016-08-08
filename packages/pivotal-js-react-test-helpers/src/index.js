const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const jQuery = require('jquery');

(function($) {
  $.fn.simulate = function(eventName, ...args) {
    if (!this.length) {
      throw new Error(`jQuery Simulate has an empty selection for '${this.selector}'`);
    }
    $.each(this, function() {
      if (['mouseOver', 'mouseOut'].includes(eventName)) {
        TestUtils.SimulateNative[eventName](this, ...args);
      } else {
        TestUtils.Simulate[eventName](this, ...args);
      }
    });
    return this;
  };

  $.fn.simulateNative = function(eventName, ...args) {
    if (!this.length) {
      throw new Error(`jQuery Simulate has an empty selection for '${this.selector}'`);
    }
    $.each(this, function() {
        TestUtils.SimulateNative[eventName](this, ...args);
    });
    return this;
  };
})(jQuery);

module.exports = {
  withContext(...args) {
    let [context, props, callback, node] = args;
    if (typeof props === 'function') {
      node = callback;
      callback = props;
      props = {};
    }

    class Context extends React.Component {
      static childContextTypes = Object.keys(context).reduce((memo, key) => (memo[key] = React.PropTypes.any, memo), {});

      getChildContext() { return context; }

      render() {
        const divProps = ['className', 'id', 'style', 'onClick'].reduce((memo, prop) => (memo[prop] = props[prop], memo), {});
        return (<div {...divProps}>{callback.call(this)}</div>);
      }
    }

    return ReactDOM.render(<Context {...props}/>, node || root);
  },

  setProps(props, node = root) {
    const Component = this.constructor;
    ReactDOM.render(<Component {...this.props} {...props}/>, node);
  },

  spyOnRender(componentClass) {
    return spyOn(componentClass.prototype, 'render').and.returnValue(null);
  }
};
