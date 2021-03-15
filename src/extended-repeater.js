const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let { repeatTimes, separator = "+", addition = "", additionRepeatTimes, additionSeparator = "|" } = options;
  str = str + "";
  addition = addition + "";

  function buildPhrase(phrase, times = 1, separator) {
    const result = [];
    while (times) {
      result.push(phrase);
      times--;
    }
    return result.join(separator);
  }

  const appendix = buildPhrase(addition, additionRepeatTimes, additionSeparator);

  return buildPhrase(str + appendix, repeatTimes, separator);

};