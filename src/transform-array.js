const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--double-next') {
      if (i < arr.length - 1) {
        result.push(arr[i + 1]);
      }
    } else if (arr[i] == '--double-prev') {
      if (i !== 0 && arr[i - 2] !== '--discard-next') {
        result.push(arr[i - 1]);
      }
    } else if (arr[i] == '--discard-next') {
      i++;
    } else if (arr[i] == '--discard-prev') {
      if (result.length !== 0 && arr[i - 2] !== '--discard-next') {
        result.pop();
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};