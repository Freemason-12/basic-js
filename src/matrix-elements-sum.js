const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9

  throw new NotImplementedError('Not implemented');
 */
function getMatrixElementsSum(m) {
  let fine = (m, x, y) => (x == 0)? true : (m[x - 1][y] != 0)? true : false
  let sum = 0
  for(let i in m){
    for(let j in m[i]) sum += fine(m, i, j)? m[i][j] : 0
  }
  return sum
}

// let matrix = [
//    [0, 1, 1, 2],
//    [0, 5, 0, 0],
//    [2, 0, 3, 3]
//   ]
//
// console.log(getMatrixElementsSum(matrix))

module.exports = {
  getMatrixElementsSum
};
