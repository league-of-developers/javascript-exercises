const validateFirstDigit = ({ firstNineDigits }) => {
  let sum = 0;
  for (let j = 0; j < 9; j += 1) {
    sum += firstNineDigits[j] * (10 - j);
  }
  const lastSumChecker = sum % 11;
  const firstChecker = lastSumChecker < 2 ? 0 : 11 - lastSumChecker;

  return firstChecker;
};

const validateSecondDigit = ({ firstTenDigits }) => {
  let sum = 0;

  for (let k = 0; k < 10; k += 1) {
    sum += firstTenDigits[k] * (11 - k);
  }

  const lastSumChecker2 = sum % 11;
  const secondChecker = lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;

  return secondChecker;
};

const validateCPF = ({ cpf }) => {
  const arrayCPF = cpf.replace(/\.|-|\s/g, '').split('');

  if (arrayCPF.length < 11 || arrayCPF.length > 11) {
    return false;
  }
  const checker1 = validateFirstDigit({ firstNineDigits: arrayCPF });
  const checker2 = validateSecondDigit({ firstTenDigits: arrayCPF });

  const calculatedCheckers = `${checker1}${checker2}`;
  const digitCheckers = `${arrayCPF[9]}${arrayCPF[10]}`;

  return digitCheckers === calculatedCheckers;
};

module.exports = validateCPF;
