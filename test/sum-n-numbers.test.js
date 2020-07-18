const assert = require('assert');
const { describe, it, expect } = require('mocha');
const solveExpressionOfNaturalNumbersUntilN = require('../src/sum-n-numbers');

describe('Make a program that calculates the following expression: 1 + 2 + 3 + 4 + ... + n.', () => {
  it('Should return the right value', () => {
    const number = 0;
    const expectedValue = 0;
    const result = solveExpressionOfNaturalNumbersUntilN({ number });

    assert.equal(expectedValue, result);
  });

  it('Should throw error if number is negative', () => {
    const number = -1;
    expect(solveExpressionOfNaturalNumbersUntilN({ number }).to.throw('number must be positive'));
  });
});
