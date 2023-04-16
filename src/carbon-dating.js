const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity = -1) {
  // throw new NotImplementedError('Not implemented');

  if(typeof sampleActivity != "string") return false

  const sa = Number(sampleActivity)
  if(isNaN(sa) || sa <= 0 || sa >= 15) return false
  const k = (0.693/HALF_LIFE_PERIOD)
  const t = Math.log(MODERN_ACTIVITY/sa)/k
  return Math.ceil(t)
  // return t
}


module.exports = {
  dateSample
};
