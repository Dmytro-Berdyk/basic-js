const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {

    let depth = 1;

    arr.forEach(element => {
      let tmpDepth = 1;
      if (Array.isArray(element)) {
        tmpDepth = tmpDepth + this.calculateDepth(element);
      }
      if (tmpDepth > depth) {
        depth = tmpDepth;
      }
    });
    return depth;
  }
}