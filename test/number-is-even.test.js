const { describe, it } = require('mocha');
const assert = require('assert');
const isEven = require('../src/number-is-even');

describe('Verify if number is even', () => {
  it('Should return true', () => {
    assert.equal(isEven({ number: 2 }), true);
  });

  it('Should return false', () => {
    assert.equal(isEven({ number: 3 }), false);
  });
});
