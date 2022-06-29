module.exports.dateStringConvertNumeric = (value, split = ".") => {
  var _value = value.split(split);
  return parseInt(_value[2] + _value[1] + _value[0]);
};

module.exports.onsConvertToGram = (onsValue, usdTryValue) => {
  console.log("onsConvertToGram", {
    onsValue,
    usdTryValue,
    result: (onsValue / 31.1) * usdTryValue,
  });
  return (onsValue / 31.1) * usdTryValue;
};
