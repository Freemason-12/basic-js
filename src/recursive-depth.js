const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
    // throw new NotImplementedError('Not implemented');
    put what's above to reset code^^^
 */
class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) return 0
    let depth = 1, max = 0
    for(let i in arr) {
      let b = this.calculateDepth(arr[i])
      max = (b > max)? b: max
    }
    depth+=max
    return depth
  }
}

module.exports = {
  DepthCalculator
};
