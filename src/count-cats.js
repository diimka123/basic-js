const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  throw new CustomError('Not implemented');
  return arr.flat()
    .filter(item => item === '^^').length
};
