## Jasmine Matchers

```sh
npm install pivotal-js-jasmine-matchers --save-dev
```

In your spec helper,

```js
require('pivotal-js-jasmine-matchers');
```

Jasmine matcher libraries

### Request Matchers

For use with `jasmine-ajax`

* toHaveBeenRequested()
  `expect('run.pivotal.io').toHaveBeenRequested();`
* toHaveBeenRequestedWithQuery(query)
  `expect('run.pivotal.io').toHaveBeenRequestWithQuery({page: 2, perPage: 50});`
* toHaveBeenRequestedWith(requestObject)
  `expect('run.pivotal.io').toHaveBeenRequestedWith({method: 'POST', requestHeaders: 'let me in'})`

### Math Matchers

* toAlmostEqual(expected, precision)

  Compares the actual and expected, to `precision` decimal places.
  `Precision` defaults to 5.

  `expect(2.000001).toAlmostEqual(2, 4);`


### React Matchers

* toHaveBeenRenderedWithProps()

  `expect(MyComponent).toHaveBeenRenderedWithProps({expanded: true});`
