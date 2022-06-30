import { Autocomplete, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeReportFilter } from "../redux/reportFilters/reportFiltersSlice";

const AutocompleteMultiSelect = ({
  fieldProperty,
  valueProperty,
  stateName,
}) => {
  const dispatch = useDispatch();

  var list = [
    { id: 1, name: "Ömer" },
    { id: 2, name: "Serdar" },
    { id: 3, name: "ŞERİFOĞLU" },
  ];

  const handleChangeEventInvestmentType = (event, value, reason, detail) => {
    dispatch(changeReportFilter({ fieldProperty, value, stateName }));
  };
  return (
    <Autocomplete
      multiple
      id={fieldProperty}
      options={list}
      getOptionLabel={(option) => option.name}
      defaultValue={valueProperty}
      renderInput={(params) => <TextField {...params} label="Yatırım Türü" />}
      onChange={handleChangeEventInvestmentType}
    />
  );
};

export default AutocompleteMultiSelect;
