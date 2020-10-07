const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(!options) return str;
  if(typeof str !== 'string') String(str);
  let add = options.addition === undefined ? '' : String(options.addition);

  let string = str + Array(options.additionRepeatTimes || 1)
      .fill(add || '')
      .join(options.additionSeparator || '');

  return Array(options.repeatTimes || 1)
      .fill(string)
      .join(options.separator || '+')
};
  