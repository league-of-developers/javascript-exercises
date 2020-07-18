const solveExpressionOfNaturalNumbersUntilN = ({ number }) => {
  let sum = 0;
  if (number < 0) {
    throw new Error('number must be positive');
  }
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }

  return sum;
};

module.exports = solveExpressionOfNaturalNumbersUntilN;
