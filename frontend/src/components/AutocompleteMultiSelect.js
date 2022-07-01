import { Autocomplete, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeReportFilter } from "../redux/reportFilters/reportFiltersSlice";
import { investmentTypes } from "../helpers/statics";

const AutocompleteMultiSelect = ({
  fieldProperty,
  valueProperty,
  stateName,
}) => {
  const dispatch = useDispatch();

  const handleChangeEventInvestmentType = (event, value, reason, detail) => {
    dispatch(changeReportFilter({ fieldProperty, value, stateName }));
  };
  return (
    <Autocomplete
      multiple
      id={fieldProperty}
      options={investmentTypes.map((e) => e.name)}
      getOptionLabel={(option) => option}
      renderInput={(params) => <TextField {...params} label="Yatırım Türü" />}
      onChange={handleChangeEventInvestmentType}
    />
  );
};

export default AutocompleteMultiSelect;
