const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
  // throw new NotImplementedError('Not implemented');
// write this to mute the code^^^
function encodeLine(str) {
  let res = []
  let ch = str[0], occ = 0, l = str.length
  for(let i = 0; i < str.length; i++){
    if(str[i] == ch){
      occ++
      if(i == l - 1){
        res.push(`${(occ > 1)? occ:''}${ch}`)
        occ = 1
        ch = str[i]
      }
    }
    else {
      res.push(`${(occ > 1)? occ : '' }${ch}`)
      occ = 1
      ch = str[i]
      if(i == l - 1) res.push(`${(occ > 1)? occ:''}${ch}`)
    }
  }
  return ''.concat(...res)
}

module.exports = {
  encodeLine
};
