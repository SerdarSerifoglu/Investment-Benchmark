import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeReportFilter } from "../redux/reportFilters/reportFiltersSlice";

const TextFieldNumber = ({
  labelName,
  fieldProperty,
  valueProperty,
  stateName,
}) => {
  const dispatch = useDispatch();

  const textFieldOnChangeEvent = (e) => {
    dispatch(
      changeReportFilter({ fieldProperty, value: e.target.value, stateName })
    );
  };
  return (
    <TextField
      id="outlined-number"
      label={labelName}
      type="number"
      onChange={textFieldOnChangeEvent}
      defaultValue={valueProperty}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default TextFieldNumber;
