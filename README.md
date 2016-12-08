# set-prop-get-value

set a new property in a js object and return the value of the given property

<a href="https://nodei.co/npm/set-prop-get-value/"><img src="https://nodei.co/npm/set-prop-get-value.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/set-prop-get-value)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/set-prop-get-value/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.1.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/set-prop-get-value/blob/master/package.json#L40)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### api
`const setProp = require('set-prop-get-value')`

**setProp(object, prop_name, prop_value)**

### example

```js
const setProp = require('set-prop-get-value')

let someObject = {}

setProp(someObject, 'hello', 'world')
// should return `world`
// and now `someObject` should have the new prop `hello: 'world'`

```



### ISC License (ISC)