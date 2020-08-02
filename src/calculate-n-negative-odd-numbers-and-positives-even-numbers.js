const isEven = require('./number-is-even');

const calculateNegativePositive = ({ n }) => {
  if (n === 1) {
    return 1;
  }
  if (isEven({ number: n })) {
    return (-1 * n) + calculateNegativePositive({ n: n - 1 });
  }
  return n + calculateNegativePositive({ n: n - 1 });
};
module.exports = calculateNegativePositive;
