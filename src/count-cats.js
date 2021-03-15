const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let result = 0;
  const regExp = /^\^{2}$/;

  matrix.forEach(subarray => {
    subarray.forEach(element => {
      if (regExp.test(element)) {
        result++;
      }
    })
  });

  return result;
};