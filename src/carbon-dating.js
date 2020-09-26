const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if(Math.sign(parseFloat(sampleActivity)) !== -1 || typeof sampleActivity !== 'string') return false;
  let k = (0.693/HALF_LIFE_PERIOD);
  let t = (Math.log(MODERN_ACTIVITY/sampleActivity)/k) * 1000;
  if(isNaN(t)) return false;
  return Math.ceil(t)
};
