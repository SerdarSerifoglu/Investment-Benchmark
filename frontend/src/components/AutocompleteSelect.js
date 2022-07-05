import { Autocomplete, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeReportFilter } from "../redux/reportFilters/reportFiltersSlice";
import { investmentTypes } from "../helpers/statics";

const AutocompleteSelect = ({ fieldProperty, valueProperty, stateName }) => {
  const dispatch = useDispatch();

  const handleChangeEventInvestmentType = (event, value, reason, detail) => {
    console.log(",handleChangeEventInvestmentType", {
      event,
      value,
      reason,
      detail,
    });
    dispatch(changeReportFilter({ fieldProperty, value, stateName }));
  };
  return (
    <Autocomplete
      id={fieldProperty}
      options={investmentTypes.map((e) => e.code)}
      getOptionLabel={(option) => option}
      renderInput={(params) => <TextField {...params} label="Yatırım Türü" />}
      onChange={handleChangeEventInvestmentType}
    />
  );
};

export default AutocompleteSelect;
