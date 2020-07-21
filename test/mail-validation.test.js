const assert = require('assert');
const { describe, it } = require('mocha');
const mailValidation = require('../src/mail-validation');

describe('Validate email', () => {
  it('Should return true if its a valid mail', () => {
    const mail = 'the-total-length@of-an-entire-address.cannot-be-longer-than-two-hundred-and-fifty-four-characters.and-this-address-is-254-characters-exactly.so-it-should-be-valid.and-im-going-to-add-some-more-words-here.to-increase-the-lenght-blah-blah-blah-blah-bla.org';
    const expectedValue = true;
    const result = mailValidation({ mail });

    assert.equal(result, expectedValue);
  });

  it('Should return false if its a invalid mail', () => {
    const mail = 'the-total-lengthof-an-entire-address.cannot-be-longer-than-two-hundred-and-fifty-four-characters.and-this-address-is-254-characters-exactly.so-it-should-be-valid.and-im-going-to-add-some-more-words-here.to-increase-the-lenght-blah-blah-blah-blah-bla.org';
    const expectedValue = false;
    const result = mailValidation({ mail });

    assert.equal(result, expectedValue);
  });
});
