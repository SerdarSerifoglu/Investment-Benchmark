module.exports.dateStringConvertNumeric = (value, split = ".") => {
  var _value = value.split(split);
  return parseInt(_value[2] + _value[1] + _value[0]);
};
