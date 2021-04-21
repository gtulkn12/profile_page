function sum(a, b) {
  return a + b;
}

function customSum(a, b, c) {
  return c * sum(a, b);
}

module.exports = {
  sum: customSum,
};
