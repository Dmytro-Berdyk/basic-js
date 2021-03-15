const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!date) {
    return "Unable to determine the time of year!";
  }

  const seasons = {
    winter: [0, 1, 11],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  };

  const month = Date.prototype.getMonth.call(date);

  for (let key in seasons) {
    if (seasons[key].includes(month)) {
      return key;
    }
  }
};