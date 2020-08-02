const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNegativePositive = require('../src/calculate-n-negative-odd-numbers-and-positives-even-numbers');

describe('Function that receives a number and calculates the following expression: 1 -2 +3 - 4 +... - n.', () => {
  it('Should return the right value', () => {
    const number = 4;
    const expectedValue = -2;
    const result = calculateNegativePositive({ number });

    assert(expectedValue, result);
  });
});
