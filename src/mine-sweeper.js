const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]

  throw new NotImplementedError('Not implemented');
 */

function minesweeper(ma) {
  let mas = []
  for(let i of ma) mas.push(Array.from({length:i.length}))
  let around = (matrix, x, y) => {
    let sum = 0
    let arx = [x - 1, x, x + 1]
    let ary = [y - 1, y, y + 1]
    for(let xx = 0; xx < arx.length; xx++)
      for(let yy = 0; yy < ary.length; yy++){
        if(arx[xx] == x && ary[yy] == y) continue
        if(matrix[arx[xx]] != null){
          if(matrix[arx[xx]][ary[yy]] != null) sum += (matrix[arx[xx]][ary[yy]])? 1 : 0
        }
      }
    return sum
  }

  for(let x = 0; x < ma.length; x++)
    for(let y = 0; y < ma[x].length; y++) mas[x][y] = around(ma, x, y)
  return mas
}

module.exports = {
  minesweeper
};
