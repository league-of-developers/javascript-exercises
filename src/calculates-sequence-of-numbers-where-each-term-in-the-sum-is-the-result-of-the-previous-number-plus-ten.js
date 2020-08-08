const calculateExpression = ({ number }) => {
  if (number < 0) {
    throw new Error('number must be positive');
  }

  if (number === 1) {
    return 1;
  }

  return (1 + ((number - 1) * 10)) + calculateExpression({ number: number - 1 });
};

module.exports = calculateExpression;
