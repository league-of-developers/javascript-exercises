const solveExpressionOfNaturalNumbersUntilN = ({ number }) => {
  if (number < 0) {
    throw new Error('number must be positive');
  }

  if (number === 1) {
    return 1;
  }

  return number + solveExpressionOfNaturalNumbersUntilN({ number: number - 1 });
};

module.exports = solveExpressionOfNaturalNumbersUntilN;
