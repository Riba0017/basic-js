const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(!Array.isArray(members)) return false;
  return members.map((memberName) => {
    if(typeof memberName == 'string') {
      return memberName.trim().charAt(0).toUpperCase();
    }
  }).sort().join('')
};
