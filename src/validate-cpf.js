const calculateCheckers = ({ cpf }) => {
  let sum = 0;

  console.log(cpf);

  for (let j = 0; j < cpf.length; j += 1) {
    sum += cpf[j] * ((cpf.length + 1) - j);
  }

  const lastSumChecker = sum % 11;
  const checker = lastSumChecker < 2 ? 0 : 11 - lastSumChecker;

  return checker;
};

const validateCPF = ({ cpf }) => {
  const arrayCPF = cpf.replace(/\.|-|\s/g, '').split('');

  if (arrayCPF.length < 11 || arrayCPF.length > 11) {
    return false;
  }

  const checker1 = calculateCheckers({ cpf: arrayCPF.slice(0, 9) });
  const checker2 = calculateCheckers({ cpf: arrayCPF.slice(0, 10) });

  const calculatedCheckers = `${checker1}${checker2}`;
  const digitCheckers = `${arrayCPF[9]}${arrayCPF[10]}`;

  return digitCheckers === calculatedCheckers;
};

module.exports = validateCPF;
