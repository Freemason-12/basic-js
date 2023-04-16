const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
  // throw new NotImplementedError('Not implemented');
  add this portion if you need to reset the code^^^
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let ans = [...arr]
  const l = ans.length, m = l - 1

  for(let i = 0; i < l; i++){
    switch (ans[i]) {
      case "--discard-next": ans[i] = null; if(i < m) ans[i + 1] = null; break;
      case "--discard-prev": ans[i] = null; if(i > 0) ans[i - 1] = null; break;
      case "--double-next":  ans[i] = null; if(i < m) ans[i] = ans[i+1]; break;
      case "--double-prev":  ans[i] = null; if(i > 0) ans[i] = ans[i-1]; break;
    }
  }
  for(let i = 0; i < ans.length; i++) if(ans[i] == null) {ans.splice(i, 1); i--;}

  return ans;
}

module.exports = {
  transform
};
