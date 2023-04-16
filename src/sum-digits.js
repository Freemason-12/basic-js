const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
  throw new NotImplementedError('Not implemented');
 */
function getSumOfDigits(n) {
  let m = n
  while(m >= 10){
    let l = m, res = 0
    while(l > 0) { res += l % 10; l = Math.trunc(l / 10); }
    m = res
  }
  return m
}

module.exports = {
  getSumOfDigits
};
