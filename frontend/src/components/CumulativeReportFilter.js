import AutocompleteMultiSelect from "./AutocompleteMultiSelect";
import { Button } from "@mui/material";
import { DatePicker } from "./DatePicker";
import { useSelector, useDispatch } from "react-redux";
import {
  getCumulativeReportData,
  reportFilter,
} from "../redux/reportFilters/reportFiltersSlice";

const CumulativeReportFilter = () => {
  const dispatch = useDispatch();
  const reportFilterData = useSelector(reportFilter);

  const buttonClickEvent = () => {
    dispatch(getCumulativeReportData(reportFilterData));
  };

  return (
    <>
      <AutocompleteMultiSelect fieldProperty="investmentType" />
      <DatePicker fieldProperty="startDate" />
      <DatePicker fieldProperty="endDate" />
      <Button variant="contained" onClick={buttonClickEvent}>
        Hesapla
      </Button>
    </>
  );
};
export default CumulativeReportFilter;
