const assert = require('assert');
const { describe, it } = require('mocha');
const sumArray = require('../src/sum-array-exercise');

describe('Given an array [1, 2, 3, 4], make a function that returns the sum of all the elements', () => {
  it('Should return the right value', () => {
    const array = [20, 10, 10];
    const expectedValue = 40;
    const result = sumArray({ array });

    assert.equal(result, expectedValue);
  });

  it('Should return the right values even with negative numbers', () => {
    const array = [-20, -10, -10];
    const expectedValue = -40;
    const result = sumArray({ array });

    assert.equal(result, expectedValue);
  });
});
