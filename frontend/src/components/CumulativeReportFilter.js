import AutocompleteMultiSelect from "./AutocompleteMultiSelect";
import { Button } from "@mui/material";
import { DatePicker } from "./DatePicker";
import { useSelector, useDispatch } from "react-redux";
import {
  getCumulativeReportData,
  CumulativeReportFilter as CRF,
} from "../redux/reportFilters/reportFiltersSlice";

const CumulativeReportFilter = () => {
  const dispatch = useDispatch();
  const reportFilterData = useSelector(CRF);

  const buttonClickEvent = () => {
    dispatch(getCumulativeReportData(reportFilterData));
  };

  return (
    <>
      <AutocompleteMultiSelect
        fieldProperty="investmentType"
        valueProperty={reportFilterData["investmentType"]}
        stateName={CumulativeReportFilter.name}
      />
      <DatePicker
        fieldProperty="startDate"
        valueProperty={reportFilterData["startDate"]}
        stateName={CumulativeReportFilter.name}
      />
      <DatePicker
        fieldProperty="endDate"
        valueProperty={reportFilterData["endDate"]}
        stateName={CumulativeReportFilter.name}
      />
      <Button variant="contained" onClick={buttonClickEvent}>
        Hesapla
      </Button>
    </>
  );
};
export default CumulativeReportFilter;
