const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let idFind;
      arr = email.split('');
      idFind = arr.reverse().findIndex( el => el === '@' );
  return arr.reverse().splice(arr.length-idFind).join('');
}

module.exports = {
  getEmailDomain
};
