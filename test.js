/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const test = require('tape')

const setPropGetValue = require('./')

test('set-prop-get-value', (assert) => {
  let obj = {foo: 1, bar: 2}

  assert.equal(
    setPropGetValue(obj, 'test', 'Hello world'),
    'Hello world',
    'should create the new prop and return the value'
  )

  assert.deepEqual(
    obj,
    {foo: 1, bar: 2, test: 'Hello world'},
    'the `obj` should have the new property `test`'
  )

  assert.throws(() => {
    setPropGetValue()
  }, 'should throw when passing a non object')

  assert.deepEqual(
    setPropGetValue(obj),
    undefined,
    'should create a prop `undefined` and return undefined value ' +
      'when missing the prop name'
  )

  assert.deepEqual(
    obj,
    {foo: 1, bar: 2, test: 'Hello world', undefined: undefined},
    'should return the obj with `undefined: undefined`'
  )

  assert.deepEqual(
    setPropGetValue(obj, 'fooBar'),
    undefined,
    'should create a prop but with return value when missing the value'
  )

  assert.deepEqual(
    obj,
    {
      foo: 1,
      bar: 2,
      test: 'Hello world',
      undefined: undefined,
      fooBar: undefined
    },
    'should return the obj with `fooBar: undefined`'
  )

  assert.end()
})
