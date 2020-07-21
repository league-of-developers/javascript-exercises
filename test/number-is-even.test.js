const { describe, it } = require('mocha');
const assert = require('assert');
const isEven = require('../src/number-is-even');

describe('Verifica se o número é par', () => {
  it('Shold return true', () => {
    assert.equal(isEven({ number: 2 }), true);
  });

  it('Shold return false', () => {
    assert.equal(isEven({ number: 3 }), false);
  });
});
