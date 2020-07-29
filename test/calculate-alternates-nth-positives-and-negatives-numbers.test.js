const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNegativePositive = require('../src/calculate-alternates-nth-positives-and-negatives-numbers');

describe('Function that receives a number and calculates the following expression: 1 -2 +3 - 4 +... - n.', () => {
  it('Shoould return the right value', () => {
    const number = 4;
    const expectedValue = -2;
    const result = calculateNegativePositive({ number });

    assert(expectedValue, result);
  });
});
