const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let modStr = '';

  let additionalStr = repAdd(options.addition, options.additionRepeatTimes, options.additionSeparator),
      onceDoneStr = `${str}${additionalStr}`;


  if ( !options.repeatTimes || options.repeatTimes === 1 ) {
    if ( !options.addition && !options.additionRepeatTimes ) {
      return `${str}`;
    } else if ( options.addition ) {
      if ( options.additionRepeatTimes ) {
        return modStr = `${str}` + `${repAdd(options.addition, options.additionRepeatTimes, options.additionSeparator)}`;
      } else {
        return modStr = `${str}` + `${options.addition}`;
      }
    }
  } else if ( options.repeatTimes > 1 ) {
    if ( !options.addition && !options.additionRepeatTimes ) {
      return repStr(str, options.repeatTimes, options.separator);
    } else
        return repStr(onceDoneStr, options.repeatTimes, options.separator);
  }



  function repAdd(addition, additionRepeatTimes, additionSeparator) {
    let s = `${addition}`;

    if ( additionRepeatTimes > 1 ) {
      if ( !additionSeparator ) {
        additionSeparator = '|';
        for (let i = 1; i < additionRepeatTimes; i++) {
          s += `${additionSeparator}` + `${addition}`;
        }
      } else {
        for (let i = 1; i < additionRepeatTimes; i++) {
          s += `${additionSeparator}` + `${addition}`;
        }
      }
    }

    return s;
  }



  function repStr(str, RepeatTimes, sep) {
    let s = `${str}`;

    if ( RepeatTimes > 1 ) {
      if ( !sep ) {
        for (let i = 1; i < RepeatTimes; i++) {
          s += `+${str}`;
        }
      } else {
        for (let i = 1; i < RepeatTimes; i++) {
          s += `${sep}` + `${str}`;
        }
      }
    }

    return s;
  }
}


module.exports = {
  repeater
};
