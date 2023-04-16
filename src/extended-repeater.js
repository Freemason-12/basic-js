const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
  // throw new NotImplementedError('Not implemented');
  put this into the function to numb tests^^^
 */
function repeater(str, options) {

  const repT = Object.hasOwn(options, 'repeatTimes')? options.repeatTimes : 1
  const sep = Object.hasOwn(options, 'separator')? options.separator: '+'
  let add = Object.hasOwn(options, 'addition')? options.addition: ''
  const addrepT = Object.hasOwn(options, 'additionRepeatTimes')? options.additionRepeatTimes: 1
  const addSep = Object.hasOwn(options, 'additionSeparator')? options.additionSeparator: '|'

  if(typeof str != "string") str = `${str}`
  if(typeof add != "string") add = `${add}`
  const additionArr = Array.from({length: addrepT}, () => add)
  const mainArr = Array.from({length: repT}, () => str + additionArr.join(addSep))
  return mainArr.join(sep)
}

module.exports = {
  repeater
};
