const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
*
  throw new NotImplementedError('Not implemented');
  write the code above when you need to reset it^^^
 */
function getCommonCharacterCount(s1, s2) {
  let ans = 0
  let s1m = Array.from({length:26},()=>0)
  let s2m = Array.from({length:26},()=>0)
  for(let i = 0; i < s1.length; i++) s1m[s1.charCodeAt(i) - 97]++
  for(let i = 0; i < s2.length; i++) s2m[s2.charCodeAt(i) - 97]++
  for(let i = 0; i < 26; i++) ans += Math.min(s1m[i], s2m[i])
  return ans
}

module.exports = {
  getCommonCharacterCount
};
