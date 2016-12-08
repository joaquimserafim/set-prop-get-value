/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

module.exports = setPropGetValue

function setPropGetValue (obj, prop, value) {
  return (obj[prop] = value)
}
