let assert = require('assert');
let hello = require('./public/main').hello;
let plural = require('./public/main').plural;
let russianPluralRule = require('./public/main').russianPluralRule;

assert.equal(hello('Test'), 'Привет, Test');

assert.equal(plural(0, ['раз','раза','раз'], russianPluralRule), 'раз');
assert.equal(plural(1, ['раз','раза','раз'], russianPluralRule), 'раз');
assert.equal(plural(12, ['раз','раза','раз'], russianPluralRule), 'раз');
assert.equal(plural(13, ['раз','раза','раз'], russianPluralRule), 'раз');
assert.equal(plural(15, ['раз','раза','раз'], russianPluralRule), 'раз');
assert.equal(plural(21, ['раз','раза','раз'], russianPluralRule), 'раз');
assert.equal(plural(22, ['раз','раза','раз'], russianPluralRule), 'раза');
assert.equal(plural(23, ['раз','раза','раз'], russianPluralRule), 'раза');
assert.equal(plural(25, ['раз','раза','раз'], russianPluralRule), 'раз');
