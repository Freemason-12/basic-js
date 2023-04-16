const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date = null */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  // if(date === null) return 'Unable to determine the time of year!'
  // // if(!.getMonth().call(date)) throw new Error('Invalid date!')
  // if(!date.__proto__.hasOwnProperty("getMonth")) throw new Error('Invalid date!')
  // let a = date.getMonth()
  // return (a >= 2 && a <= 4)? "spring" : (a >= 5 && a <= 7)? "summer" : (a >= 8 && a <= 10)? "autumn" : "winter"
}

module.exports = {
  getSeason
};
