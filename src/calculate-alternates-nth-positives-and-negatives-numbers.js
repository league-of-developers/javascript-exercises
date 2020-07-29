const calculateNegativePositive = ({ n }) => {
  if (n === 1) {
    return 1;
  }
  if (n % 2 === 0) {
    return ((-1 * n) + calculateNegativePositive(n - 1));
  }
  return (n + calculateNegativePositive(n - 1));
};
module.exports = calculateNegativePositive;
