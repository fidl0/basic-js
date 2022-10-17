const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = str.split(''),
      res = [];

  for ( let i = 0, acc = 1; i < arr.length; i++ ) {
    if ( arr[i] === arr[i+1] ) {
      acc++;
    } else {
        if (acc === 1) {
            res.push( `${arr[i]}` );
        } else {
            res.push( `${acc}${arr[i]}` );
        }
      acc = 1;
    }
  }
  return res.join('').toString();
}

module.exports = {
  encodeLine
};
