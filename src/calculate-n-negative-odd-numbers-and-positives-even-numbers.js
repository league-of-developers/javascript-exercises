const isEven = require('./number-is-even');

const calculateNegativePositive = ({ number }) => {
  if (number < 0) {
    throw new Error('number must be positive');
  }
  if (number === 1) {
    return 1;
  }
  if (isEven({ number })) {
    return (-1 * number) + calculateNegativePositive({ number: number - 1 });
  }
  return number + calculateNegativePositive({ number: number - 1 });
};
module.exports = calculateNegativePositive;
