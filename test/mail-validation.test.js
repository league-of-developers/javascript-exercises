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

  it('Should return true', () => {
    const validEmails = [
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@letters-in-local.org',
      '01234567890@numbers-in-local.net',
      "&'*+-./=?^_{}~@other-valid-characters-in-local.net",
      'mixed-1234-in-{+^}-local@sld.net',
      'a@single-character-in-local.org',
      'one-character-third-level@a.example.com',
      'single-character-in-sld@x.org',
      'local@dash-in-sld.com',
      'letters-in-sld@123.com',
      'one-letter-sld@x.org',
      'test@test--1.com',
      'uncommon-tld@sld.museum',
      'uncommon-tld@sld.travel',
      'uncommon-tld@sld.mobi',
      'country-code-tld@sld.uk',
      'country-code-tld@sld.rw',
      'local@sld.newTLD',
      'the-total-length@of-an-entire-address.cannot-be-longer-than-two-hundred-and-fifty-four-characters.and-this-address-is-254-characters-exactly.so-it-should-be-valid.and-im-going-to-add-some-more-words-here.to-increase-the-lenght-blah-blah-blah-blah-bla.org',
      'the-character-limit@for-each-part.of-the-domain.is-sixty-three-characters.this-is-exactly-sixty-three-characters-so-it-is-valid-blah-blah.com',
      'local@sub.domains.com',
      'backticks`are`legit@test.com',
      'digit-only-domain@123.com',
      'digit-only-domain-with-subdomain@sub.123.com',
    ];

    validEmails.forEach((validEmail) => {
      assert.equal(mailValidation({ mail: validEmail }), true);
    });
  });

  it('Should return false if its a invalid mail', () => {
    const mail = 'the-total-lengthof-an-entire-address.cannot-be-longer-than-two-hundred-and-fifty-four-characters.and-this-address-is-254-characters-exactly.so-it-should-be-valid.and-im-going-to-add-some-more-words-here.to-increase-the-lenght-blah-blah-blah-blah-bla.org';
    const expectedValue = false;
    const result = mailValidation({ mail });

    assert.equal(result, expectedValue);
  });

  it('Should return false if the email is incorrect', () => {
    const invalidEmails = [
      '@missing-local.org',
      '! #$%`|@invalid-characters-in-local.org',
      '(),:;`|@more-invalid-characters-in-local.org',
      '<>@[]\\`|@even-more-invalid-characters-in-local.org',
      '.local-starts-with-dot@sld.com',
      'local-ends-with-dot.@sld.com',
      'two..consecutive-dots@sld.com',
      'partially."quoted"@sld.com',
      'the-local-part-is-invalid-if-it-is-longer-than-sixty-four-characters@sld.net',
      'missing-sld@.com',
      'sld-starts-with-dashsh@-sld.com',
      'sld-ends-with-dash@sld-.com',
      'invalid-characters-in-sld@! "#$%(),/;<>_[]`|.org',
      'missing-dot-before-tld@com',
      'missing-tld@sld.',
      'invalid',
      'the-total-length@of-an-entire-address.cannot-be-longer-than-two-hundred-and-fifty-six-characters.and-this-address-is-257-characters-exactly.so-it-should-be-invalid.and-im-going-to-add-some-more-words-here.to-increase-the-lenght-blah-blah-blah-blah-blah-.org',
      'the-character-limit@for-each-part.of-the-domain.is-sixty-three-characters.this-is-exactly-sixty-four-characters-so-it-is-invalid-blah-blah.com',
      'missing-at-sign.net',
      'unbracketed-IP@127.0.0.1',
      'invalid-ip@127.0.0.1.26',
      'another-invalid-ip@127.0.0.256',
      'IP-and-port@127.0.0.1:25',
      'trailing-dots@test.de.',
      'dot-on-dot-in-domainname@te..st.de',
      'dot-first-in-domain@.test.de',
      'mg@ns.i',
    ];
    invalidEmails.forEach((mail) => {
      assert.equal(mailValidation({ mail }), false);
    });
  });
});
