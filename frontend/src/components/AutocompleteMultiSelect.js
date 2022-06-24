import { Autocomplete, TextField } from "@mui/material";

const AutocompleteMultiSelect = () => {
  var list = [
    { id: 1, name: "Ömer" },
    { id: 2, name: "Serdar" },
    { id: 3, name: "ŞERİFOĞLU" },
  ];

  const handleChangeEvent = (event, value, reason, detail) => {
    console.log("handleChangeEvent", { event, value, reason, detail });
  };
  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={list}
      getOptionLabel={(option) => option.name}
      defaultValue={[]}
      renderInput={(params) => <TextField {...params} label="Yatırım Türü" />}
      onChange={handleChangeEvent}
    />
  );
};

export default AutocompleteMultiSelect;
