'use strict';

var ES = require('../').ES2016;

var ops = require('../operations/2016');

// jscs:disable
var expectedMissing = ['CreateMethodProperty', 'DefinePropertyOrThrow', 'DeletePropertyOrThrow', 'Construct', 'SetIntegrityLevel', 'TestIntegrityLevel', 'CreateArrayFromList', 'CreateListFromArrayLike', 'OrdinaryHasInstance', 'EnumerableOwnNames', 'CreateListIterator', 'thisNumberValue', 'thisTimeValue', 'thisStringValue', 'RegExpBuiltinExec', 'IsPromise'];
// jscs:enable

require('./tests').es2016(ES, ops, expectedMissing);