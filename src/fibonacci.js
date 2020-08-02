/* eslint-disable no-param-reassign */
const fibonacci = ({ number, memo = {} }) => {
  memo = memo || {};
  if (memo[number]) {
    return memo[number];
  }
  if (number <= 1) {
    return 1;
  }
  // eslint-disable-next-line no-return-assign
  return (memo[number] = fibonacci({ number: number - 1, memo })
    + fibonacci({ number: number - 2, memo }));
};

module.exports = fibonacci;
