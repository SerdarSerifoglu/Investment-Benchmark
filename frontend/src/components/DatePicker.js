import { useDispatch } from "react-redux";
import { changeReportFilter } from "../redux/reportFilters/reportFiltersSlice";
import styled from "@emotion/styled";
import {
  FormControl,
  Input,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { useEffect } from "react";

export const DatePicker = ({
  fieldProperty,
  valueProperty,
  stateName,
  labelValue,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <FormControl sx={{ mr: 1 }}>
        <InputLabel htmlFor={fieldProperty}>{labelValue}</InputLabel>
        <Input
          type="date"
          id={fieldProperty}
          value={valueProperty}
          min="2001-01-01"
          max="2022-06-30"
          onChange={(e) => {
            //Max Min seçimi düzenlenecek sonradan
            if (parseInt(e.target.value.replaceAll("-", "")) > 20220630) {
              e.target.value = "2022-06-30";
            }
            if (parseInt(e.target.value.replaceAll("-", "")) < 20010101) {
              e.target.value = "2001-01-01";
            }
            dispatch(
              changeReportFilter({
                fieldProperty,
                value: e.target.value,
                stateName,
              })
            );
          }}
          // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
    </>
  );
};

const DatePickerStyled = styled.input`
  height: 50px;
  width: 120px;
  text-align: center;
  margin-right: 10px;
  // line-heigth: 40px;
`;
