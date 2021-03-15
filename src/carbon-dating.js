const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity != 'string') {
    return false;
  }

  const x = parseFloat(sampleActivity);

  if (x == sampleActivity) {

    const lnTwo = 0.693;
    const k = lnTwo / HALF_LIFE_PERIOD;
    const result = Math.ceil((Math.log(MODERN_ACTIVITY / +sampleActivity)) / k);

    if (result <= 0 || !isFinite(result)) {
      return false;
    }
    return result;
  }
  return false;
}