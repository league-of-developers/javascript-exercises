const assert = require('assert');
const { describe, it } = require('mocha');
const fibonacci = require('../src/fibonacci');

describe(`Write a function to return the nth element in the Fibonacci sequence, where the sequence is:
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
`, () => {
  it('Should return the nth element', () => {
    const expectedValue = 13;
    const result = fibonacci({ number: 6 });
    assert.equal(expectedValue, result);
  });

  it('Should return the nth element even with big numbers', () => {
    const expectedValue = 927372692193079200000;
    const result = fibonacci({ number: 101 });
    assert.equal(expectedValue, result);
  });
});
