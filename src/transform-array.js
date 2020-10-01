const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if(!Array.isArray(arr)) throw new Error('Error');
  let arrCopy = arr.slice();

  arrCopy.forEach((item, index) => {
    switch (arrCopy[index]) {
      case '--discard-next':
        arrCopy[index] = 'xxx';
        arrCopy[index+1] = 'xxx';

        break;
      case '--discard-prev':
        arrCopy[index] = 'xxx';
        arrCopy[index-1] = 'xxx';
        break;
      case '--double-next':
        if(index >= arrCopy.length-1) {
          arrCopy[index] = 'xxx';
        } else {
          arrCopy[index] = arrCopy[index+1];
        }
        break;
      case '--double-prev':
        if(index > 0 && arrCopy[index-1] !== 'xxx'){
          arrCopy[index] = arrCopy[index-1];
        } else {
          arrCopy[index] = 'xxx';
        }
        break;
    }
  });

  return arrCopy.filter(item => item !== 'xxx')
};