const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let turns = Math.pow(2, disksNumber) - 1;

  let seconds = Math.floor(turns * 60 * 60 / turnsSpeed);

  return { turns, seconds };

};