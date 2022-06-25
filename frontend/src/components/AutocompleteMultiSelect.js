import { Autocomplete, TextField } from "@mui/material";

const AutocompleteMultiSelect = ({ fieldProperty }) => {
  var list = [
    { id: 1, name: "Ömer" },
    { id: 2, name: "Serdar" },
    { id: 3, name: "ŞERİFOĞLU" },
  ];

  const handleChangeEventInvestmentType = (event, value, reason, detail) => {
    console.log("handleChangeEvent", { event, value, reason, detail });
  };
  return (
    <Autocomplete
      multiple
      id={fieldProperty}
      options={list}
      getOptionLabel={(option) => option.name}
      defaultValue={[]}
      renderInput={(params) => <TextField {...params} label="Yatırım Türü" />}
      onChange={handleChangeEventInvestmentType}
    />
  );
};

export default AutocompleteMultiSelect;
