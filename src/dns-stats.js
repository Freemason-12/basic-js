const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  throw new NotImplementedError('Not implemented');
  // let tree = new Map()
  // for(let d of domains){
  //   let arr = d.split('.').reverse(), node = tree
  //   for(let i of arr) {
  //     if(!node.has(i)) node.set(i, new Map())
  //     node = node.get(i)
  //   }
  // }
  // console.log(tree)
  // let ret = {}
  // let traverse = (map, init = '', ret) => {
  //   for(let i of Object.keys(map)){
  //     let str = `${init}.${i}`
  //     console.log(str)
  //     ret[str] = map.get(i).length
  //     for(let j of map.get(i).keys()) traverse(j, str)
  //   }
  // }
  // traverse(tree, ret)
  // return ret
}

// let domains = [
//  'code.yandex.ru',
//  'music.yandex.ru',
//  'yandex.ru'
// ]
//
// console.log(getDNSStats(domains))

module.exports = {
  getDNSStats
};
