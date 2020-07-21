const assert = require('assert');
const { describe, it } = require('mocha');
const { expect } = require('chai');
const solveExpressionOfNaturalNumbersUntilN = require('../src/sum-n-numbers');

describe('Make a program that calculates the following expression: 1 + 2 + 3 + 4 + ... + n.', () => {
  it('Should return the right value', () => {
    const number = 4;
    const expectedValue = 10;
    const result = solveExpressionOfNaturalNumbersUntilN({ number });

    assert.equal(expectedValue, result);
  });

  it('Should throw error if number is negative', () => {
    const number = -1;
    expect(() => solveExpressionOfNaturalNumbersUntilN({ number })).to.throw('number must be positive');
  });
});
