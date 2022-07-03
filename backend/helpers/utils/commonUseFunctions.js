module.exports.dateStringConvertNumeric = (value, split = ".") => {
  var _value = value.split(split);
  return parseInt(_value[2] + _value[1] + _value[0]);
};

module.exports.dateStringConvertNumericNotConvert = (value, split = ".") => {
  var _value = value.split(split);
  return parseInt(_value[0] + _value[1] + _value[2]);
};

module.exports.dateStringReplaceAndReturn = (value, split = ".") => {
  var _value = value.split(split);
  return _value[2] + "-" + _value[1] + "-" + _value[0];
};

module.exports.onsConvertToGram = (onsValue, usdTryValue) => {
  console.log("onsConvertToGram", {
    onsValue,
    usdTryValue,
    result: (onsValue / 31.1) * usdTryValue,
  });
  return (onsValue / 31.1) * usdTryValue;
};
