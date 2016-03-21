# Pivotal JS

Matchers and helpers to meet your testing needs.

* [Jasmine Matchers](https://github.com/pivotal-cf/pivotal-js/tree/master/packages/pivotal-js-jasmine-matchers)

* [React Test Helpers](https://github.com/pivotal-cf/pivotal-js/tree/master/packages/pivotal-js-react-test-helpers)

We're using [Lerna](https://github.com/kittens/lerna) to manage the publishing of these tools.

Run `gulp publish` to build and publish the modules.

New modules should be put in the `packages` folder.

Anything in a folder like `packages/packageName/src` will be compiled into `packages/packageName/lib` 
as part of `gulp publish`
