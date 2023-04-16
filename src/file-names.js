const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
  // throw new NotImplementedError('Not implemented');

function renameFiles(names) {
  let table = new Map(), ans = []
  for(let i of names){
    if(table.has(i)){
      table.set(i, table.get(i) + 1)
      table.set(`${i}(${table.get(i)})`, 0)
    } else table.set(i, 0)
  }
  return [...table.keys()]
}

// console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))

module.exports = {
  renameFiles
};
