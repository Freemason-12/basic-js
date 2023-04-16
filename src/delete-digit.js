const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
  throw new NotImplementedError('Not implemented');
  write this code when you need to reset it^^^
 */
function deleteDigit(n) {
  let arr = [], m = n
  while(m > 0){arr.unshift(m % 10); m = Math.floor(m/10);}
  
  let min = 0
  for(let i in arr) {
    let ms = [...arr]
    ms.splice(i, 1)
    let nn = Number.parseInt(ms.join(''), 10)
    min = nn > min? nn : min
  }
  return min
}

module.exports = {
  deleteDigit
};
