const assert = require('assert');
const { describe, it } = require('mocha');
const { expect } = require('chai');
const calculateExpression = require('../src/calculates-sequence-of-numbers-where-each-term-in-the-sum-is-the-result-of-the-previous-number-plus-ten');

describe('Make a program that calculate de following expression: 1 + 11 + 21 + 31 +... + n', () => {
  it('Shoud return the right value', () => {
    const number = 3;
    const expectedValue = 33;
    const result = calculateExpression({ number });

    assert.equal(expectedValue, result);
  });

  it('Should throw error if number is negative', () => {
    const number = -3;
    expect(() => calculateExpression({ number })).to.throw('number must be positive');
  });
});
