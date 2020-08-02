const assert = require('assert');
const { describe, it } = require('mocha');
const validateCPF = require('../src/validate-cpf');

describe('Validate if a CPF is valid or not', () => {
  it('Should return true if is a valid CPF', () => {
    const expectedValue = true;
    const cpf = [
      '890.578.253-17',
      '68584183264',
      '975.565.189-65',
    ];
    cpf.map((CPFvalue) => assert.equal(expectedValue, validateCPF({ cpf: CPFvalue })));
  });

  it('Should return false if is a invalid CPF', () => {
    const expectedValue = false;
    const cpf = [
      '890.578.253-20',
      '6858418326',
      '975.565.189-653',
    ];

    cpf.map((CPFvalue) => assert.equal(expectedValue, validateCPF({ cpf: CPFvalue })));
  });
});
