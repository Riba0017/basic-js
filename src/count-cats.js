const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //return matrix.flat().filter(cat => cat === '^^').length; //(38s)
  let sum = 0;
  matrix.flatMap(el => {
    for(let i = 0; i < el.length; i++) {
      if(el[i] === '^^') sum++
    }
  });
  return sum;
};
