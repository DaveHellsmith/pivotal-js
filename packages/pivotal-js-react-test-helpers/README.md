## React Test Helpers

```sh
npm install pivotal-js-react-test-helpers --save-dev
```

In your spec helper,

```js
require('pivotal-js-react-test-helpers');
```

* simulate(eventName, ...args)

    Uses `react-addons-test-utils` to simulate events, using #Simulate
    for all events except for 'mouseOver' and 'mouseOut', with use #simulateNative.
    
    `$('.my-class').simulate('click');`


* simulateNative(eventName, ...args)
    
    Uses the #simulateNative method from `react-addons-test-utils`. Sometimes necessary for clicking on labels. 

    `$('.my-class').simulateNative('click');`


* setProps(props, node)

    Alter the props of a rendered element in test 
    
    `subject::setProps({display: true});`
    
* spyOnRender(componentClass)

    Creates a Jasmine spy on the render method of the component passed in.
    To be used with `toHaveBeenRenderedWithProps` from pivotal-js-jasmine-matchers

    `spyOnRender(MyComponent);`

* withContext(...args)

    Inject React context in test

    ```
    subject = withContext({applicationVersion: '0.0.1'}, props, function() {
      return (<MyComponent {...this.props}/>);
    });
    ```