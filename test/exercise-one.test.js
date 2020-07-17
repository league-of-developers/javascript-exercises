const assert = require('assert');
const { describe, it } = require('mocha');
const sum = require('../src/exercise-one');

describe('Exercise One', () => {
  it('Should return the right value', () => {
    const expectedValue = 10;
    const result = sum({ firstNumber: 5, secondNumber: 5 });

    assert.equal(expectedValue, result);
  });
});
